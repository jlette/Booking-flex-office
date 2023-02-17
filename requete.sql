-- Recuperer les mails des favoris user
SELECT mail FROM user INNER JOIN favoriuser ON user.iduser = favoriuser.idfavuser;
