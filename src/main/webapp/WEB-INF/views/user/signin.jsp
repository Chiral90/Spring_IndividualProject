<%@ include file="../includes/header.jsp" %>
<link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/checkout/">
<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/css/form-validation.css" rel="stylesheet">
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="/resources/js/signin.js"></script>
<!-- Bootstrap core CSS -->
<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
<!-- Custom styles for this template -->
<link href="/resources/css/signin.css" rel="stylesheet">
  <body class="text-center">
    
<main class="form-signin">
  <form action="/user/signin" method="post">
    
    <h1 class="h3 mb-3 fw-normal">현장 측정 유저 로그인</h1>
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" name="bizNo">
      <label for="floatingInput">사업자 번호</label>
      <div class="valid">'-'를 제외한 10자리 숫자를 입력하세요</div>
    </div>
    <br>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" name="pw">
      <label for="floatingPassword">패스워드</label>
      <div class="valid"></div>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">로그인</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>


    
  </body>

</html>
