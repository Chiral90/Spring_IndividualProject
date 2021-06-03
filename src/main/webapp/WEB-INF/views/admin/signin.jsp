<%@ include file="../includes/adminHeader.jsp" %>
<link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/checkout/">
<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/css/form-validation.css" rel="stylesheet">
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- Bootstrap core CSS -->
<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
<!-- Custom styles for this template -->
<link href="/resources/css/signin.css" rel="stylesheet">
<style>body{display: flex; flex-direction: column; padding-top: 0;}</style>

  <body class="text-center">
    
<main class="form-signin">
  <form action="/admin/signin" method="POST">
    
    <h1 class="h3 mb-3 fw-normal">모니터링 유저 로그인</h1>

    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" name="bizNo" placeholder="">
      <label for="floatingInput">관리자 계정</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" name="pw" placeholder="">
      <label for="floatingPassword">패스워드</label>
    </div>

    <!-- <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div> -->
    <button class="w-100 btn btn-lg btn-primary" type="submit">로그인</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>


    
  </body>
</html>
