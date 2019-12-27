IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Posts')
BEGIN
	CREATE TABLE Posts (
		Id UNIQUEIDENTIFIER NOT NULL,
		ReceiverId UNIQUEIDENTIFIER NOT NULL,
		SenderId UNIQUEIDENTIFIER NOT NULL,
		Content VARCHAR(MAX) NOT NULL,
		CreatedAt DATETIME NOT NULL,
		CONSTRAINT PK_Posts PRIMARY KEY (Id),
		CONSTRAINT FK_Posts_ReceiverId_Users_Id FOREIGN KEY (ReceiverId) REFERENCES Users(Id),
		CONSTRAINT FK_Posts_SenderId_Users_Id FOREIGN KEY (SenderId) REFERENCES Users(Id)
	);
END

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'Comments' AND COLUMN_NAME = 'PostId' AND TABLE_SCHEMA = 'DBO')
BEGIN
	ALTER TABLE Comments ADD PostId UNIQUEIDENTIFIER NOT NULL;
	ALTER TABLE Comments ADD CONSTRAINT FK_Comments_PostId_Posts_Id FOREIGN KEY (PostId) REFERENCES Posts(Id);
END