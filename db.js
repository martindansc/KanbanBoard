var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
var db;

var filename;
var migration;

var connect = function() {
    db = new sqlite3.Database('./database');
	migrate('./migrations/schema.sql');
}
exports.connect = connect;

var getFromDb = function(database, id, callback) {
  	var sql = "SELECT * FROM " + database + " WHERE id = '"+ id + "'";
	var query = db.all(sql, [], callback);
}
exports.getFromDb = getFromDb;

var insertToDb = function(database, obj, callback) {

	var array = new Array(Object.values(obj).length);
	array = array.fill('?').join();

	var sql = "INSERT INTO " + database + " (" + Object.keys(obj).join() + 
		") VALUES (" + array +")";
	var query = db.run(sql, Object.values(obj), callback);
}
exports.insertToDb = insertToDb;

var updateField = function(database, id, field, value, callback) {

	var sql = "UPDATE " + database + " SET " + field + " = " + 
		value + " WHERE id = " + id;
	var query = db.run(sql, [], callback);
}
exports.updateField = updateField;

/**
 * Migrate database function
 */

//Read migrations file
var getMigrationsFile = function (callback) {
	fs.readFile(filename, 'utf-8', function (err, data) {
		if(err) console.error();
		else {
			migration.up = data.replace(/^--.*?$/gm, '').trim(); // Remove comments and whitespaces
			callback();
		}
	});
}

//Execute querys
var doMigrations = function(callback) {

	var execFile = function() {
		db.exec(migration.up, execCommit);
	}

	var execCommit = function(err) {
		if(err) console.error(err);
		else {
			db.run('COMMIT', callback);
		}
	}

	db.run('BEGIN', execFile);
}

//Base migrate function
var migrate = function(migrationFile) {
	migration = {};
	filename = migrationFile;
	
	var start = function() {
		getMigrationsFile(checkMigrationsFile);
	};

	var checkMigrationsFile = function() {
		doMigrations(printDone);
	};

	var printDone = function() {
		console.log("Database started");
	}

	start();
};
