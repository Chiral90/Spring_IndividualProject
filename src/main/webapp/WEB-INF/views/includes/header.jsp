<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%-- <%@ page session="false" %> --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="/resources/js/header.js"></script>
</head>
<body>
<div class="container">
  <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a href="/main" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-4">Foot Print</span>
    </a>

    <ul class="nav nav-pills">
      <li class="nav-item"><a href="/user/monitoring" class="nav-link">모니터링</a></li>
      <li class="nav-item"><a href="/user/measure" class="nav-link">측정</a></li>
      <li class="nav-item"><a href="/user/board" class="nav-link">방문 기록</a></li>
      <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      <li class="nav-item"><a href="#" id="sign" class="nav-link">#</a>
      <form id="form"><input type="hidden"></form></li>
    </ul>
    <input type="hidden" id="user" name="user" value=<c:out value='${user.bizNo }' /> >
</header>
</div>
