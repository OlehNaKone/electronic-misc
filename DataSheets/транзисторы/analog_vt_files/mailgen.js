function email (login, sc)
{
 	var serv = new Array;
	serv[0] = "mail.ru";
	serv[1] = "list.ru";
	serv[2] = "rambler.ru";
	eml = login +  "@" + serv[sc];
	return eml;
}

function mylo (login, sc)
{
document.write (email(login, sc));
}

function namylo (login, sc, sub)
{
eml = "mailto:" + email(login, sc);
if (sub != "") eml += "?subject=" + sub;
window.location.href = eml;
}
