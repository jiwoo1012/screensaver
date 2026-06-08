// 카카오 API 로드가 완료된 후 아래 코드를 실행합니다.
kakao.maps.load(function() {
    let mapContainer = document.getElementById('map');
    let mapOption = { 
        center: new kakao.maps.LatLng(37.5779, 126.9729), 
        level: 3 
    }; 

    let map = new kakao.maps.Map(mapContainer, mapOption);

    let marker = new kakao.maps.Marker({
        map: map, 
        position: new kakao.maps.LatLng(37.5779, 126.9729)
    });

    // let content = '<div class="wrap" style="background:white; padding:10px; border:1px solid #ccc;">' + 
    //               '운치 서촌<br>서울 종로구 자하문로4길 14-2' +
    //               '</div>';

    let content = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            운치 서촌' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="img">' +
            '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">' +
            '           </div>' + 
            '            <div class="desc">' + 
            '                <div class="ellipsis">서울 종로구 자하문로4길 14-2</div>' + 
            '                <div class="jibun ellipsis">(우) 03044 (지번) 서울 종로구 통의동 35-106</div>' + 
            '                <div><a href="https://granhand.com/" target="_blank" class="link">홈페이지</a></div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>';

    let overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition()        
    });

    kakao.maps.event.addListener(marker, 'click', function() {
        overlay.setMap(map);
    });
});

// map 변수를 전역(또는 상위) 범위에 선언
let map;

kakao.maps.load(function() {
    let mapContainer = document.getElementById('map');
    let mapOption = { 
        center: new kakao.maps.LatLng(37.5779, 126.9729), 
        level: 3 
    }; 

    // 선언해둔 전역 변수에 할당
    map = new kakao.maps.Map(mapContainer, mapOption);

    let marker = new kakao.maps.Marker({
        map: map, 
        position: new kakao.maps.LatLng(37.5779, 126.9729)
    });

    let content = '<div class="wrap">' + 
                  '  <div class="info">' + 
                  '    <div class="title">운치 서촌<div class="close" onclick="closeOverlay()" title="닫기"></div></div>' + 
                  '    <div class="body">' + 
                  '      <div class="img"><img src="https://cdn.crowdpic.net/detail-thumb/thumb_d_8DD8F80A42646CA4F298E426DE4CC8F9.jpg" width="73" height="70"></div>' + 
                  '      <div class="desc">서울 종로구 자하문로4길 14-2<br><br>010-1012-0513</div> + ' +
                  '    </div>' + 
                  '  </div>' + 
                  '</div>';

    let overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition()        
    });

    kakao.maps.event.addListener(marker, 'click', function() {
        overlay.setMap(map);
    });
});

// Showroom 버튼 클릭 시 레이아웃 재설정
const showroomBtn = document.querySelector('[data-target="showroom"]');

if (showroomBtn) {
    showroomBtn.addEventListener('click', function() {
        // 0.1초 뒤에 지도가 나타날 공간을 확보한 후 재설정
        setTimeout(function() {
            if (map) {
                map.relayout();
                map.setCenter(new kakao.maps.LatLng(37.5779, 126.9729));
            }
        }, 100);
    });
}