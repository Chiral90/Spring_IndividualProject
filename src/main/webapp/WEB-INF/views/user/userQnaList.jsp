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
    
   
    <!-- Bootstrap core CSS -->
	<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
	
    
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
	  <!-- button group -->
	  <div class="input-group">
		  <span class="input-group-btn">
		    <button class="btn btn-secondary register" type="button">글 쓰기</button>
		    <script>
		    $(document).ready(function(){
		    	$(".register").click(function(e) {
			    	e.preventDefault();
			    	$(location).attr('href', "/user/userQnaRegister");	    		
		    	});
		    });
		    </script>
		    </span>
	  </div>
      
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>번호</th>
              <th>사업자번호</th>
              <th>상호명</th>
              <th>제목</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
              <c:forEach items="${list}" var="qna">
	           	<tr>
	           		<td><c:out value="${qna.qno }" /></td>
	           		<td><c:out value="${qna.bizNo }" /></td>
	           		<td><c:out value="${qna.corpName }" /></td>
	           		<td><a href="/user/userQnaDetail?qno=<c:out value='${qna.qno }' />"><c:out value="${qna.title }" /></a></td>
	           		<td><c:out value="${qna.regdate }" /></td>
	           	</tr>
	           </c:forEach>
          </tbody>
        </table>
      </div>
      
      <nav aria-label="Page navigation">
      	<ul class="pagination">
      		<c:if test="${pageMaker.prev }">
      			<li class="page-item previous"><a href="${pageMaker.startPage - 1 }">Prev</a></li>
      		</c:if>
      		
      		<c:forEach var="num" begin="${pageMaker.startPage }"
      		end="${pageMaker.endPage }">
      		
      		<li class="page-item ${pageMaker.cri.pageNum == num ? 'active' : '' }">
      		<a href="${num }">${num }</a></li>
      		</c:forEach>
      		
      		<c:if test="${pageMaker.next }">
      			<li class="page-item next"><a href="${pageMaker.endPage + 1 }">Next</a></li>
      		</c:if>
      	</ul>
      </nav>
      <form id="pagingForm" action="/user/userQnaList" method="get">
	   	<!-- 페이지 이동 시에도 동일한 검색 사항들을 유지 -->
	   	<input type="hidden" name="keyword" value="<c:out value='${pageMaker.cri.keyword }' />">
	   	
	   	<input type="hidden" name="pageNum" value="${pageMaker.cri.pageNum }">
	   	<input type="hidden" name="amount" value="${pageMaker.cri.amount }">
	  </form>
	  <script>
	  $(document).ready(function(){
		  var pagingForm = $("#pagingForm");
		  $(".page-item a").click(function(e){
			  e.preventDefault();
			  console.log($(this).attr("href"));
			  pagingForm.find("input[name='pageNum']").val($(this).attr("href"));
			  pagingForm.submit();
		  });
	  })
	  </script>
    </main>