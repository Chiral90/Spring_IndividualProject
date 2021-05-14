<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%-- <%@ page session="false" %> --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.82.0">
    <title>Dashboard Template · Bootstrap v5.0</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/dashboard/">
    <script  src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="/resources/js/adminHeader.js"></script>
   
    <!-- Bootstrap core CSS -->
	<link href="/resources/css/bootstrap.min.css" rel="stylesheet">

  
    
  </head>
  <body>
    
<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/main">FootPrint Chaser</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
<nav class="navbar navbar-expand-sm">
  <ul class="navbar-nav px-3">
  	<li class="nav-item text-nowrap">
      <a class="nav-link" aria-current="page" href="javascript:monitoring()">
        <span data-feather="home"></span>
        	대시보드
      </a>
    </li>
  	<li class="nav-item text-nowrap">
      <a id="userList" class="nav-link" href="javascript:userList()"> <!-- 스크립트의 sessionStorage 보존을 위해 스크립트로 이동 -->
      
        <span data-feather="layers"></span>
        	등록업체 리스트 &
      
        <!-- <span data-feather="users"></span> -->
        	기록
      </a>
    </li>
    <li class="nav-item text-nowrap">
      <a class="nav-link" href="">
        <span data-feather="bar-chart-2"></span>
        	지역별 발생 횟수
      </a>
    </li>
    
    <li class="nav-item text-nowrap">
      <a class="nav-link" id="sign" href="#"></a><form id="form"><input type="hidden"></form>
    </li>
  </ul>
</nav>
</header>