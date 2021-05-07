<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="/socket.io/socket.io.js"></script>
<title>Insert title here</title>
</head>
<body>

<div id="container">
        <div id="chatView">
 
        </div>
        <form id="chatForm" onsubmit="return false">
            <input type="text" id="msg">
            <input type="submit" id="send" value="전송">
        </form>
</div>

<script>
	var socket = io(); 
</script>
</body>
</html>