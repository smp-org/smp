﻿IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Requests')
BEGIN
	DROP TABLE Requests;
END