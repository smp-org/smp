﻿IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'RequestTypes')
BEGIN
	DROP TABLE RequestTypes;
END