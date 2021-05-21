<%@ include file="../includes/userHeader.jsp" %>
<link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/checkout/">
<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/css/form-validation.css" rel="stylesheet">
<link href="/resources/css/register.css" rel="stylesheet">
<script type="text/javascript" src="/resources/js/register.js"></script>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<section>

<div class="container">
  <main>
    <div class="py-5 text-center">
      <!-- <img class="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
      <h2>사업자 정보 등록</h2>
      <p class="lead"></p>
    </div>

      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">사업자 정보 등록 양식</h4>
        <form class="needs-validation" novalidate action="/user/register" method="post">
          <div class="row g-3">
            
			<div class="col-12">
              <label for="corpName" class="form-label">상호명</label>
                <input type="text" class="form-control" id="corpName" name="corpName" placeholder="" value="" required>
                
                <div class="chk invalid-feedback">
                 	상호명은 필수 입력입니다.
                </div>
            </div>
			
            <div class="col-12">
              <label for="bizNo" class="form-label">사업자 번호 (ID)</label>            
                <input type="text" class="form-control" id="bizNo" name="bizNo" placeholder="" value="" required>
                
                <div class="chk invalid-feedback">
                 	사업자 번호는 필수 입력입니다.
                </div>
                <div></div><div></div>
            </div>

            <div class="col-12">
              <label for="pw" class="form-label">패스워드</label>
              <input type="password" class="form-control" id="pw" name="pw" value="" required>
              <div class="chk invalid-feedback">
                 	패스워드는 필수 입력입니다.
                </div>
              <div></div>
            
            </div>
            
            <div class="col-sm-12">
              <label for="addr" class="form-label">주소</label>
              <input type="text" class="form-control" id="addr" name="addr" placeholder="" value="" required>
                <div class="chk invalid-feedback">
                	주소는 필수 입력입니다.
              </div>
            </div>
            <div class="col-sm-8">
              <label for="url" class="form-label">url</label>
              <input type="text" class="form-control" id="url" name="url" placeholder="오른쪽 매뉴얼 버튼을 눌러 입력 방법을 확인해주세요" value="">
                <div class="chk invalid-feedback">
                	url은 필수 입력입니다.
              </div>
            </div>
            <div class="col-sm-2">
              <label for="manualBtn" class="form-label">매뉴얼</label>
              <input type="button" class="w-100 btn btn-primary" id="manualBtn" value="매뉴얼">
	              <div class="modal fade" id="manual" tabindex="-1" role="dialog">
					  <div class="modal-dialog modal-lg" role="document">
					    <div class="modal-content">
					      <div class="modal-header">
					      	<h4 class="modal-title">url 입력 방법</h4>
					        <button type="button" class="btn btn-default close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					      </div>
					      <div class="modal-body">
					        <p>1. 사업장 주소입력 후	2. 지도 링크 버튼 '클릭'</p>
					        <img src="/resources/img/urlstep1.png">
					        <p>3.실제 위치와 동일한지 확인 후 4. 지도 로딩이 완료되면 빨간색 사각형 안의 내용을 '오른쪽 클릭 후 복사'</p>
					        <img src="/resources/img/urlstep2.png">
					        <p>5. 원래 페이지로 돌아와 url 항목에 '붙여넣기' 6. 위도 경도에 값이 들어있는지 확인 후 진행</p>
					        <img src="/resources/img/urlstep3.png">
					      </div>
					      <div class="modal-footer">
					        <button type="button" class="btn btn-default close" data-dismiss="modal">닫기</button>
					      </div>
					    </div><!-- /.modal-content -->
					  </div><!-- /.modal-dialog -->
					</div><!-- /.modal -->
            </div>
            <div class="col-sm-2">
              <label for="linkBtn" class="form-label">지도</label>
              <input type="button" class="w-100 btn btn-primary" id="linkBtn" value="링크"><a href="#" id="link"></a>
              
            </div>
            
            
            <div class="col-sm-6">
              <label for="lati" class="form-label">위도</label>
              <input type="text" class="form-control" id="lati" name="lati" placeholder="" value="" readonly required>
                <div class="chk invalid-feedback">
                	위도는 필수 입력입니다.
              </div>
              
            </div>

            <div class="col-sm-6">
              <label for="longi" class="form-label">경도</label>
              <input type="text" class="form-control" id="longi" name="longi" placeholder="" value="" readonly required>
                <div class="chk invalid-feedback">
               	 경도는 필수 입력입니다.
              </div>
              
            </div>
            
         
            
            <div class="col-12">
              <label for="phoneNo" class="form-label">사업자 연락처</label>
                
                <input type="text" class="form-control" id="corpPhoneNo" name="corpPhoneNo" placeholder="'-'를 제외하고 입력" value="" required>
                <div class="chk invalid-feedback">
                 	연락처는 필수 입력입니다.
                </div>
                <div></div>
            </div>

            <div class="col-12">
              <label for="sectors" class="form-label">업종 구분</label>
              <select class="form-select" id="sectors" name="sectors" required>
                <option value="">Choose...</option>
                <option value="catering">일반 음식점</option>
                <option value="medical">의료</option>
                <option value="education">교육</option>
              </select>
              <div class="chk invalid-feedback">
				업종을 선택하세요.
              </div>
            </div>

          <hr class="my-4">

          <button class="w-100 btn btn-primary btn-lg" type="submit">사업자 초기 정보 등록</button>
         
        </form>
      </div>
     </main>
    </div>


  
  
<!-- footer -->
  <footer class="my-5 pt-5 text-muted text-center text-small">
    
  </footer>
    </section>

    <script src="/resources/js/bootstrap.bundle.min.js"></script>

      <script src="/resources/js/form-validation.js"></script>
  </body>
</html>
