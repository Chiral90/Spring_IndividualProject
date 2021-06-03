<%@ include file="../includes/userHeader.jsp" %>
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
    <script src="/resources/js/userQnaList.js"></script>
   
    <!-- Bootstrap core CSS -->
	<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="/resources/css/userQnaList.css">
	<style>
		.close {position: fixed;
			top: 50px;
			right: 50px;}
    </style>
    
  </head>
  <body>
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Q & A</h1>
        
      </div>
      <div class="input-group">
		  <form class="col-sm-8" id="searchForm" action="/user/searchUser" method="get"><input name="keyword" type="text" class="form-control col-sm-6" placeholder="사업자 번호 / 상호명 검색"></form>
		  <span class="input-group-btn">
		    <button class="btn btn-secondary" type="button">찾기</button>
		    </span>
	  </div>
	  
      
      <div class="table-responsive">
      <form>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>번호</th>
              <td id="qno"><c:out value="${detail.qno }" /></td>
            </tr>
            <tr>
              <th>사업자번호</th>
              <td><c:out value="${detail.bizNo }" /></td>
            </tr>
            <tr>
              <th>제목</th>
              <td><c:out value="${detail.title }" /></td>
            </tr>
            <tr>
              <th>내용</th>
              <td><c:out value="${detail.content }" /></td>
            </tr>
            <tr>
              <th>등록일</th>
              <td><c:out value="${detail.regdate }" /></td>
            </tr>
            <tr>
              <th>수정일</th>
              <td><c:out value="${detail.updateDate }" /></td>
            </tr>
          </thead>
        </table>
        </form>
        <!-- button group -->
	  <div class="input-group">
		  <span class="input-group-btn">
		    <button class="btn btn-secondary update" type="button">수정 / 삭제</button>
		    <script>$(document).ready(function(){
		    	$(".update").click(function(e){
		    		e.preventDefault();
		    		console.log("update clicked");
		    		var qno = ${detail.qno};
		    		console.log(${detail.bizNo});
		    		console.log(${user.bizNo});
		    		if (${detail.bizNo}==${user.bizNo}) {
		    			$(location).attr('href', "/user/userQnaUpdate?qno="+qno);
		    		} else {alert("본인 글만 수정 가능")}
		    	});
		    });</script>
		    
		    </span>
	  </div>
      </div>
    </main>