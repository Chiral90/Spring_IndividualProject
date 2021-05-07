<%@ include file="../includes/header.jsp" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/carousel/">
<!-- Bootstrap core CSS -->
<link href="/resources/css/bootstrap.min.css" rel="stylesheet">    
<!-- Custom styles for this template -->
<link href="/resources/css/carousel.css" rel="stylesheet">
<!-- Custom js -->
<script type="text/javascript" src="/resources/js/measure.js"></script>

  <body>

<main>
<style>body {padding: 0 0;}</style>
  <div id="myCarousel" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
        <div class="container">
          <div class="carousel-caption">
          <!-- <div class="carousel-caption text-start"> -->
            <h1>step1. QR코드를 인식시켜 주세요</h1>
          </div>
        </div>
      </div>
     
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
        <div class="container">
          <div class="carousel-caption">
            <h1>step2. 센서에 손목을 밀착시켜 주세요</h1>
          </div>
        </div>
      </div>
      
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
        <div class="container">
          <div class="carousel-caption">
          <!-- div class="carousel-caption text-end"> -->
            <h1>정상입니다</h1>
            </div>
        </div>
      </div>
      
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
        <div class="container">
          <div class="carousel-caption">
            <h1>다시 측정하세요</h1>
          </div>
        </div>
      </div>
      
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->

  <div class="container marketing">
    <!-- Three columns of text below the carousel -->
    <div class="row">
    <form>
     <%-- <input type="hidden" id="bizNo" name="bizNo" value="${user.bizNo }"> --%>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
        <rect width="100%" height="100%" fill="#FF0000"/><text x="50%" y="50%" fill="#777" dy=".3em"></text>
        <!-- <input type="hidden" id="name" name="name"/>
        <input type="hidden" id="addr" name="addr"/>
        <input type="hidden" id="phoneNo" name="phoneNo"/> --></svg>
        <h2>Step1</h2>

      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
        <rect width="100%" height="100%" fill="#FF0000"/><text x="50%" y="50%" fill="#777" dy=".3em"></text>
        <!-- <input type="hidden" id="temp" name="temp"> --></svg>

        <h2>Step2</h2>

      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
        <rect width="100%" height="100%" fill="#FF0000"/>
        <text x="50%" y="50%" fill="#777" dy=".3em"></text></svg>

        <h2>Step3</h2>
      </div><!-- /.col-lg-4 -->
      </form>
    </div><!-- /.row -->

  </div><!-- /.container -->


  <!-- 인서트 테스트 영역 -->

  
  	<div class="test">
  	  <style>
    .test main {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    </style>
  <main>
    <div class="py-5 text-center">
      <!-- <img class="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
      <h2>체온 측정 테스트</h2>
    </div>

	<!-- <iframe id="iframe" name="iframe" style="display:none"></iframe> -->
	<iframe id="iframe" name="iframe" style="display:none"></iframe>

      <div class="col-md-7 col-lg-8">
        <form class="needs-validation" action="/user/measureAction" method="post" target="iframe">
        <!-- <form class="needs-validation" novalidate action="/user/insertData" method="post"> -->
          <div class="row g-3">
            <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
            <div class="col-12">
              <label for="bizNo" class="form-label">사업자 번호</label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="bizNo" name="bizNo" value="${user.bizNo }" readonly>
              </div>
			<div class="col-12">
              <label for="name" class="form-label">이름</label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="name" name="name">
              </div>
            </div>
			<div class="col-12">
              <label for="addr" class="form-label">주소</label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="addr" name="addr">
              </div>
            </div>
            <div class="col-12">
              <label for="phoneNo" class="form-label">전화번호</label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="phoneNo" name="phoneNo">
              </div>
            </div>
            <div class="col-12">
              <label for="temp" class="form-label">체온</label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="temp" name="temp">
              </div>
            </div>
           

          <hr class="my-4">

          
         
        </form>
      </div>
     </main>
    </div>

