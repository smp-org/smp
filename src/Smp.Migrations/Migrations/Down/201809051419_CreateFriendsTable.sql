USE [SMP]

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Friends')
BEGIN
	DROP TABLE Friends;
END