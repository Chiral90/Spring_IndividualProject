<%-- <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.82.0">
    <title>Checkout example · Bootstrap v5.0</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/checkout/">

    

    <!-- Bootstrap core CSS -->
<link href="/resources/css/bootstrap.min.css" rel="stylesheet">

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

    
    <!-- Custom styles for this template -->
    <link href="/resources/css/form-validation.css" rel="stylesheet">
</head> --%>
<%@ include file="../includes/header.jsp" %>
<link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/checkout/">
<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/css/form-validation.css" rel="stylesheet">
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<body class="bg-light">
    <style>
    main {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    </style>
<div class="container">
  <main>
    <div class="py-5 text-center">
      <!-- <img class="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
      <h2>사업자 정보 등록</h2>
      <p class="lead">전체 항목을 빠짐없이 기입해주세요</p>
    </div>

      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">사업자 정보 등록 양식</h4>
        <form class="needs-validation" novalidate action="/user/insert" method="post">
          <div class="row g-3">
            
			<div class="col-12">
              <label for="corpName" class="form-label">상호명</label>
              <div class="input-group has-validation">
                
                <input type="text" class="form-control" id="corpName" name="corpName" placeholder="그린 컴퓨터 아카데미" required>
                <div class="invalid-feedback">
                 	상호명은 필수 입력입니다.
                </div>
              </div>
            </div>
			
            <div class="col-12">
              <label for="bizNo" class="form-label">사업자 번호 (ID)</label>
              <div class="input-group has-validation">
                
                <input type="text" class="form-control" id="bizNo" name="bizNo" placeholder="'-'를 제외한 10자리 숫자" required>
                <div class="invalid-feedback">
                 	 사업자 번호는 필수 입력입니다.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="pw" class="form-label">패스워드</label>
              <input type="password" class="form-control" id="pw" name="pw" placeholder="패스워드 패턴 안내" required>
              <div class="invalid-feedback">
                	패스워드는 필수 입력입니다.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lati" class="form-label">위도</label>
              <input type="text" class="form-control" id="lati" name="lati" placeholder="" value="" required>
                <div class="invalid-feedback">
                	위도는 필수 입력입니다.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="longi" class="form-label">경도</label>
              <input type="text" class="form-control" id="longi" name="longi" placeholder="" value="" required>
                <div class="invalid-feedback">
               	 경도는 필수 입력입니다.
              </div>
            </div>
            
            <div class="col-12">
              <label for="phoneNo" class="form-label">사업자 연락처</label>
              <div class="input-group has-validation">
                
                <input type="text" class="form-control" id="phoneNo" name="phoneNo" placeholder="'-'를 제외하고 입력" required>
                <div class="invalid-feedback">
                 	연락처는 필수 입력입니다.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="sectors" class="form-label">업종 구분</label>
              <select class="form-select" id="sectors" name="sectors" required>
                <option value="">Choose...</option>
                <option value="catering">일반 음식점</option>
                <option value="medical">의료</option>
                <option value="education">교육</option>
              </select>
              <div class="invalid-feedback">
				업종을 선택하세요.
              </div>
            </div>

          <hr class="my-4">

          <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </form>
      </div>
    </div>
  </main>
  
  
<!-- footer -->
  <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; 2017–2021 Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
</div>


    <script src="/resources/js/bootstrap.bundle.min.js"></script>

      <script src="/resources/js/form-validation.js"></script>
  </body>
</html>
