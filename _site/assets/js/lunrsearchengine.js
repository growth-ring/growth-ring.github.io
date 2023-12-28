
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "같이 성장 하는 일을 돕습니다.",
    "body": "테스크 그로우는 같이 성장 하는 일을 돕는 성장 애플리케이션입니다. 뽀모도로를 이용한 할 일(To-Do) 관리 기능을 제공합니다. 할 일에 대한 뽀모도로 계획을 세우고, 회고를 할 수 있습니다. 이외에도 성장에 도움이 되는 기능을 게속해서 기획하고 개발합니다.  테스크 그로우 써보기 → "
    }, {
    "id": 2,
    "url": "http://localhost:4000/authors",
    "title": "Authors",
    "body": "                                                                                                                                                              kyuwon:         테스크 그로우 백엔드 엔지니어. 겸업으로 기획, 매니징, 오너 등을 맡음                                                                                                                                                       Jiho:         테스크 그로우 프론트 엔지니어. 겸업으로 디자인, 기획 등을 맡음                "
    }, {
    "id": 3,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/contact",
    "title": "Contact",
    "body": "  Please send your message to Growth Ring. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                               테스크 그로우의 연말회고              :       2023년도 어느새 끝나고 있네요. 한 해의 마무리는 역시 회고죠! 테스크 그로우도 연말 회고를 했습니다. 🍷:                                                                               kyuwon                 26 Dec 2023                                                                                                                           테스크 그로우는 어떻게 일할까              :       테스크 그로우는 지난 8월 5일에 시작하여, 어느새 시작된 지 벌써 4개월 반이 훌쩍 지났습니다. 보통 한 달도 유지하기 힘들다는 팀 프로젝트! 테스크 그로우는 어떻게 협업하고 있을까요?:                                                                               kyuwon                 21 Dec 2023                                                                                                                           테스크 그로우를 소개합니다.               :       💡 Taskgrow는 집중력 향상을 위한 할 일 체크리스트와 함께 동작하는 뽀모도로 타이머를 통한 개인 생산성 관리 서비스입니다. :                                                                               Jiho                 09 Dec 2023                                                                                                                           테스크 그로우는 어떻게 시작되었을까              :       개발자의 성장을 돕는 최고의 프로그래밍 훈련소 코드숨에서는 같이 뽀모도로를 합니다. :                                                                               kyuwon                 09 Dec 2023                                "
    }, {
    "id": 6,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "http://localhost:4000/%ED%85%8C%EC%8A%A4%ED%81%AC-%EA%B7%B8%EB%A1%9C%EC%9A%B0%EC%9D%98-%EC%97%B0%EB%A7%90-%ED%9A%8C%EA%B3%A0/",
    "title": "테스크 그로우의 연말회고",
    "body": "2023/12/26 - 2023년도 어느새 끝나고 있네요. 한 해의 마무리는 역시 회고죠! 테스크 그로우도 연말 회고를 했습니다. 🍷 🎙 8월부터 5개월간 테스크 그로우는 무엇을 했나요? 또, 테스크 그로우에서 어떤 걸 하셨나요?:  kyuwon8월에 테스크 그로우라는 아이템을 프로젝트로 만들었어요. 같이 할 멤버들을 모았고, 어떤 걸 만들지 공유하고 테스크 그로우를 만들기 시작했어요. 초기에는 달력과 타이머를 결합한 형태를 만들자는 것이 목표였어요. 이를 위해 처음부터 다 설계하고 조금씩 살을 붙여갔죠. 지금은 처음 구상했던 타이머에 투두를 진행하는 기능이 구현됐고, 더 나아가 마이페이지에서 통계를 볼 수 있는 기능도 새로 추가됐어요. 또, AWS 서버를 올려서 배포되어 직접 사용해 볼 수 있게 되었죠. 공식적인 런칭 발표는 하지 않았지만 초기 목표했던 것은 이루었다고 볼 수 있겠네요. 사이드 프로젝트가 처음인 사람, 백엔드와 협업이 처음인 사람들이 모여서 어떻게 하면 더 나은 협업을 할 수 있을까? 같이 고민하면서 여러 가지 시도를 계속했어요. 지금도 여러 가지 시도를 하려고 해요. 정답인 방법은 없어요. 우리에게 맞는 방법이 뭔지 찾고 시도하고 안 맞는다면 버리고 바꿔보고 채택하고 우리에게 맞는 것을 찾고 있습니다.  jiho테스크 그로우는 1~2주 간격의 매 스프린트마다 완벽하지는 않아도 무언가를 사용할 수 있는 서비스를 만들고자 했어요. 초기에는 단순히 달력, 투두 페이지에 뽀모도로가 있는 형태를 기획했었는데 지금은 거기에 덧붙여 회고 기능과 통계 기능까지 제공하고 있어요. 딱딱한 서비스보다는 친밀감을 주고 싶어서 감정 점수에 따라 달력에는 직접 그린 감정 스티커를 보여주고 있습니다.  🎙 테스크 그로우에 합류했을 때는 목표가 있었을 거 같은데, 어떤걸 얻고자 했고, 무엇을 얻으셨나요?:  kyuwon크게 두 가지 목표가 있었어요. 좋은 팀을 만들고 싶다. 더 나은 설계를 하고 코드를 작성하고 싶다. 많은 프로젝트가 완성하지 못하고 팀이 해체된다고 들어서, 지속해서 유지되는 팀을 만들고 싶었어요. 그래서 계속 고민하고 이것저것 도입해 보고 아니면 바로 버리고 다른 걸 시도했어요. 위클리, 칸반 보드, 회고 등이요. 처음에 제가 이 프로젝트를 만들다 보니 자연스레 리더 롤이 되었고, 그러다 보니 백엔드보다는 관리에 초점을 맞췄어요. 코드 리뷰도 하고 어떻게 하면 지시가 아니라 제안으로 서로 기분이 상하지 않게 의사소통을 할 수 있을까? 많이 고민했어요. 중간에 개인적으로 일대일 회고를 하면서 개선점도 듣고 각자의 생각도 듣고 공유하며 점점 조율해 갔죠. 결론적으로 의사소통하는 법, 팀을 이끄는 법 등을 조금이나마 배우게 됐어요. 후반부에는 백엔드가 저만 남게 되어서, 코드에 좀 더 집중했어요. 어떻게 설계하면 좋을까? 자잘한 부채들도 눈에 띄었고, 계속 스터디를 하며 배운 것들을 적용했어요.  또, 추상화에 더 신경 쓰게 되었죠. 또,기획을 같이하다 보니 사용자가 사용할 만한 서비스가 무엇일까? 나라면 이런 기능이 있으면 좋겠는데? 라는 생각을 하면서 기능을 만들었어요. 그 덕분에 더 신나게 작업을 했어요. 이런저런 아이디어도 떠오르고 레퍼런스도 찾게 되고 빨리 다른 사용자의 피드백을 받고 싶다. 결론적으로 기획력이 증가했네요 ㅎㅎ  jiho프론트엔드를 준비하고 혼자 공부 중인 저에게 누군가와 함께할 수 있는 기회는 귀했어요. 혼자만 프론트엔드인 게 걱정이 많았지만 현업 백엔드 개발자 두 분이 계셔서 배울 점이 많을 거 같아서 왠지 든든했고 부족한 건 그때그때 채워나가자는 생각으로 합류하게 되었어요. 협업의 과정이 궁금했고 프로젝트를 하면서 리액트에 익숙해지고 써보지 않았던 여러 기술들을 도입해 보고자 했어요. 프로젝트를 진행하면서 처음인 것이 많았어요. Swagger도 처음 사용해 보았고 Zustand, Tailwind, styled-components, React-calendar, chart 라이브러리 등 필요하면 바로 습득하고 구현하기 바빴던 거 같아요. 글로만 보던 각 기술의 장단점이 직접 써보니 와닿았습니다. 제일 성장했다고 느꼈을 때는 이전에 제가 작성한 코드의 고칠 부분이 보이고 그걸 좀 더 나은 방향으로 수정했을 때였어요. 이전에도 코드를 작성하면서 좀 더 괜찮은 방법이 있을 거 같다고는 생각했지만 그 방법은 생각해 내지 못했었는데 시간이 흐른 뒤 지금의 제가 수정하는 모습을 보고 조금이나마 성장했다는 것을 느낄 수 있었어요. 그리고 협업하면서 어떻게 소통해야 하는지를 배웠어요. 또 칸반 보드, MSW를 도입해 보면서 더 나은 협업에 대해서도 고민해 보게 되었죠. 특히 API에 대한 생각이 많이 바뀌었어요. 이전에는 프론트가 백엔드가  API를 받아서 사용하기에 API는 백엔드의 영역이라고 생각을 했었어요. 그러다 보니 적극적으로 의견을 내기가 어려워서 받아서 쓰기만 했었어요. 어느 날 규원 님이 나에게 왔을 때 그대로 받아들이는 것이 아니라 분석과 설계는 해봐야 한다고 이야기를 하셨는데 그 말을 계기로 API가 오로지 백엔드의 영역이라는 관념에서 벗어나게 되었어요. 지금은 단순히 필요한 API를 요청하는 것에서 더 나아가 어떤 것이 필요한지, 왜 필요한지, 이렇게 구현해 보는 건 어떤지 설계를 함께 할 수 있게 되었어요.  🎙 더 좋은 성장하는 테스크 그로우가 되기 위해 개선해야 할 점이 있을까요? 또 버리고 가야 할 것이 있나요?:  kyuwon9월쯤 중간 회고 때 일정 관리에 대한 이야기가 많이 나왔어요. 생각보다 기능 구현이 딜레이가 많이 됐고, 어떤 부분이 진행되고 있고 딜레이됐는지 눈에 보이지 않아 더 어려웠어요. 지금은 칸반 보드와 스프린트를 도입해서 개선되었어요. 테스크 그로우가 개선해야 할 점이라면, 자잘한 버그들? 아무래도 안정성을 빨리 갖춰야겠다죠. 개인적으로는 백엔드가 한 명이 되면서 코드 리뷰도 사라지고 현업도 하다 보니 제가 짜고 다시 제 코드를 살펴보는 일이 적어지더라고요. 그러다 보니 자잘한 실수들이 잦아졌어요. 실수를 최대한 줄이기 위해 테스트 케이스도 해피 패스보다는 엣지 케이스나 검증이 돼야 하는 부분들, 체크리스트를 만들어서 테스트해야겠다는 생각이 많이 들었어요. 이젠 실 운영이니깐 제대로 QA하고 시나리오도 작성해 보고 배포해야죠.  jiho아무래도 부족한 저 혼자 프론트엔드를 맡고 있어서 기술적으로 많이 부족한 부분들이 개선되어야 한다고 생각해요. 그동안 빠르게 개발하기 위해서 그다지 의미 없는 함수명을 써오는 습관이 있었어요. 프로젝트를 진행하면서 습관을 버리고 역할에 맞는 함수명을 짓기 위해 노력했었지만 시간이 지나 다시 보면 명확하지 않은 함수명들이 꽤나 있었어요. 쉬운 것 같아도 어려운 게 함수명 짓기인 거 같아요. 그리고 코드를 추상화하는 데에 신경 써야겠다고 느꼈어요. 제가 짠 코드인데도 시간이 지난 후에 보면 다시 해석하기 바쁘더라고요. 앞으로의 안정적인 테스크 그로우를 만들어가는 데에 기술적으로 부족한 부분들을 채워나가는 것이 우선이라고 생각돼요.  🎙 앞으로의 테스크 그로우의 목표는 무엇인가요?:  kyuwon당장 1분기의 목표라고 한다면 기술 부채 해결? 자잘하게 쌓아둔 기술 부채들을 해결해야 할 때가 왔어요. 더 이상 미룰 수는 없다! 또, 쌓아둔 아이디어들을 이젠 기능으로 옮길 때가 되지 않았나. 테스크 그로우의 목표라면 안정화해서 여러 사람에게 사용해 보라고 하고 싶어요. 더 나아가서 내 지인이 아닌 누군지 모르는 사람들이 꾸준히 사용하는 게 목표입니다.  jiho테스크 그로우가 안정화가 되면 여기저기에 홍보해서 사용자를 늘리고 싶어요. 생각하지 못한 부분에서 사용자에게 피드백을 받고 예상치 못한 오류들을 부딪혀가면서 우리의 테스크 그로우에서 모두의 테스크 그로우로 넓히고 싶어요.  🎙 마지막 질문입니다!🎉 회고 어떠셨나요?:  kyuwon5개월이라는 시간이 짧으면 짧고 길다면 긴 시간인데, 이 시간 동안 테스크 그로우가 어떤 일을 했고, 어떤 성장을 했는지 또, 어떤 시련이 있었는지 돌아볼 수 있어서 좋았어요. 이런 회고덕분에 다음 목표도 꽤 구체적으로 세울 수 있었어요. 자칫 지루하거나 잊힐 수 있는데 이런 이벤트를 통해 다시 환기돼서 좋습니다. 앞으로 2주간은 스프린트 없이 방학을 맞이하는데, 잘 즐기고 충전하고 다음 스프린트를 또다시 달려야죠!  jiho회고를 하면서 전반적으로 정리할 수 있어서 좋았어요. 공통의 목표도 확인해 보고 정하는 시간을 가졌으니 다음 테스크 그로우도 같이 상상을 현실로 만들어보려고 합니다. ➕🎤 추가로 궁금한게 있어요. 같이 협업하면서 어땠나요?:  kyuwon저는 현업도 하고 있어서 비교적 여러 사람과 협업을 많이 해봤는데, 그동안의 협업을 하면서 느꼈던 것들을 해소하는 시간이었던 거 같아요.  그동안 좋은 협업을 위해 배운 것들이나 개선해야겠다고 느꼈던 것들 시도해 보고 싶었던 것들을 테스크 그로우에서 많이 해볼 수 있었어요. 반성도 많이 하고 배운 것도 많습니다. 어떻게 하면 좀 더 명확하게 의견을 말할 수 있을까? 상대방의 기분이 상하지 않게 말할 수 있을까? 이런 의사소통과 관련한 것뿐만 아니라 문제를 같이 해결하는 경험도 많이 하게 됐어요. 아무래도 주니어다보니 현업에서는 도움을 많이 받는 입장인데, 여기서는 도움을 많이 드릴 수 있어서 뿌듯했습니다. 언젠가는 찾아올 시니어가 되기 위한 준비?  jiho도움받고 배우는 게 많았던 테스크 그로우였어요. 첫 회의 때에는 모르는 용어들이 난무하고 혼자 프론트엔드여서 잘할 수 있을지 걱정이 많았었어요. 모르는 것은 혼자 검색하며 고민하다가 정말 모르겠는 것만 질문을 했었는데 바로 해결이 돼서 그간의 시간이 아까웠던 적도 있었어요. 모르는 건 빨리 도움받는 것이 더 좋다는 것을 깨닫기도 했고 개발자로서 어떻게 소통해야 하는지도 배웠어요. 또 다양한 시각에서 문제를 들어볼 수 있어서 좋았습니다. 규원 님이 중심을 잡아주신 덕분에 테스크 그로우가 잘 굴러가지 않았나 생각합니다. 이상 테스크 그로우의 회고였습니다! 봐주셔서 감사해요. 모여서 상상을 현실로 만드는 테스크 그로우 내년에도 기대해주세요! 🥳 "
    }, {
    "id": 8,
    "url": "http://localhost:4000/%ED%85%8C%EC%8A%A4%ED%81%AC-%EA%B7%B8%EB%A1%9C%EC%9A%B0%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9D%BC%ED%95%A0%EA%B9%8C/",
    "title": "테스크 그로우는 어떻게 일할까",
    "body": "2023/12/21 - 테스크 그로우는 지난 8월 5일에 시작하여, 어느새 시작된 지 벌써 4개월 반이 훌쩍 지났습니다. 보통 한 달도 유지하기 힘들다는 팀 프로젝트! 테스크 그로우는 어떻게 협업하고 있을까요? 지난 테스크 그로우는 어떻게 시작되었을까에서 예고한 대로 테스크 그로우는 어떻게 일하는지 소개합니다! 처음엔 이것도 저것도 해보지! 뭐: 처음에는 노션, 스웨거, 잼보드, draw. io 등을 사용했습니다. 지금은 사용하지 않고 있어요. 요금과 사용성 때문에 잘 사용하지 않게 돼서 자연스레 사용하지 않게 되었습니다. 이제는 디스코드와 깃허브 프로젝트 두 가지를 사용합니다. 먼저 지난 글에서 잠깐 나왔다시피 테스크 그로우의 의사소통은 디스코드로 이루어집니다.  처음에는 회의방, 공지방, 음성 채널뿐이었던 서버에 지금은 이렇게나 많은 채널이 생겼습니다. 이중 자주 사용되는 채널 몇 가지만 밑에서 소개할게요. 채널을 소개합니다: 회의방 &amp; 회의록: 먼저, 테스크 그로우에는 회의방이 있습니다. 정기적으로 매주 화요일 8시에 테스크 그로우 음성채널에 모여서 회의합니다. 테스크 그로우는 주간 스프린트를 진행합니다. 회의 때 1주간 할 수 있는 작은 단위의 기능에 대해 논의하고 의사 결정을 합니다. 회의를 통해 의사결정 된 부분들을 가지고 한 주간 열심히 개발합니다. 다시 회의 때 진행된 부분들을 같이 QA를 하면서 개선되어야 하는 부분, 추가 기능 등에 대해 논의합니다. 다음 기능에 관해서도 이야기를 나누죠. 또, 스프린트가 길어지면 한 주 건너뛰기도 합니다. 그래서 이 채널에는 뭐가 올라오느냐! 바로 회의하면서 까먹을 수 있는 내용이나 정리가 필요한 내용들을 적습니다. 회의 시간에 공유하기 전에 미리 어떤 것들을 공유해야 하는지 올리기도 하죠. 채널 목록 중에 회의록이라는 채널도 눈에 띌 텐데 이 채널은 회의가 끝나면 정리된 회의록이 올라옵니다.  매주 올라오지는 않습니다. 회의하면서 회의방에 정리를 하기 때문에 정리를 잘 못한 날이나 내용이 많았던 날은 정리가 된 회의록이 올라옵니다. work-board: 여기는 정기적인 회의방과 달리 실시간으로 하는 작업에 대한 것들이 올라옵니다.  기능을 구현하며 미처 생각하지 못한 부분들을 조율하거나 버그를 발견했을 때 알리는 용도입니다. 활발한 방 중의 하나입니다. 실제 개발에 들어가면 회의 때 생각했던 방법이 잘 안될 때가 있습니다. 필요한 데이터가 더 있거나 클라이언트에서 하기로 했는데 서버에서 하는 것이 맞는다는 거나 그런 경우 이곳에 올라옵니다. 서로 논의하며 더 나은 방향으로 나아가죠. 채널은 이렇게만 소개하고 다음으로 넘어가겠습니다. 칸반 보드를 도입하라!!: 회의 때 논의 된 내용을 가지고 일을 하다 보니 서로 어떤 일을 진행하고 있는지, 완료된 작업인지? 어떤 작업이 남아있는지? 파악하기 어려웠어요. 그러다 보니 일정이 꼬이기도 하고 일의 우선순위가 이상해지기도 했습니다. 그때 마침 코드숨에서 진행했던 업무시각화 스터디에 참여했고, 칸반 보드를 활용한 업무 시각화에 대해 배웠습니다. (👉 업무 시각화 서평 보러 가기 ) 지라와 같은 형태의 무료 서비스가 없을까 찾다가 깃허브의 프로젝트 기능을 발견했습니다. 먼저 개인적으로 사용해보고 우리 프로젝트에도 도입하면 좋겠다는 생각이 들어 도입했습니다. 현재까지 아주 잘 쓰고 있는 규칙이에요.  바로 표지에서 이미 본 이것입니다! 자세히 보면 IN PROGRESS와 PLANNED에 개수 제한이 걸려있는 것이 보입니다. 너무 많은 일을 한 번에 담당하는 것이 아니라 한 번에 한 가지 일을 제대로 할 수 있도록 제한을 뒀습니다. 일정관리 뿐만 아니라 해당 테스크에 대해서 어떻게 작업을 하고 있는지 생각의 흐름대로 적습니다. 나중에 해당 테스크에 대한 히스토리가 궁금할 때 보면 아주 유용하죠. 또, 다른 사람이 이 보드를 보고 다른 아이디어를 줄 수도 있고 업무에 참고할 수도 있습니다. 또, PLANNED에 고정되어 있는 태스크가 하나 있습니다. 바로 &lt;[Product] 필요한 기능 또는 아이디어&gt;라는 테스크입니다. 이곳에는 앞으로 필요한 기능들에 대한 아이디어가 올라옵니다. 언젠가 회의 때 다음 스프린트를 정하는데 다음에 어떤 걸 할까? 생각이 나지 않아서 다음으로 미룬 적이 있습니다. 그런 일을 방지하기 위해 해당 테스크를 만들었고 아이디어 창고처럼 생각나는 것들을 간단하게 또는 아주 자세하게 쌓아둡니다.  제법 많이 쌓였죠? 다음 스프린트는 여기에 올라온 것 중 지금 필요한 것을 선택합니다. 테스크 그로우의 보물창고예요. 효율적으로 일하기 위해 테스크 그로우는 이것저것 시도해 보며 우리에게 맞는 것들은 점점 더 발전시키고 맞지 않는 것들은 빠르게 탈락시키며 도입하고 있습니다. 좋은 문화가 있다면 소개시켜 주세요. 다음 포스트에서 만나요~ 스포 아마 다음 포스트는 테스크 그로우의 연말 회고일지도? "
    }, {
    "id": 9,
    "url": "http://localhost:4000/%ED%85%8C%EC%8A%A4%ED%81%AC-%EA%B7%B8%EB%A1%9C%EC%9A%B0%EB%A5%BC-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4/",
    "title": "테스크 그로우를 소개합니다.",
    "body": "2023/12/09 - 💡 Taskgrow는 집중력 향상을 위한 할 일 체크리스트와 함께 동작하는 뽀모도로 타이머를 통한 개인 생산성 관리 서비스입니다. ✨ 서비스 : http://taskgrow. codesoom. com 🤔 Taskgrow? 그거 그냥 평범한 체크리스트 아니야? 뭐가 달라?: Taskgrow은 더 나은 일상 관리를 위한 서비스로, 뽀모도로와 할 일 체크리스트를 통한 할 일 관리를 넘어 사용자의 감정에 중심을 두는 독특한 기능을 제공합니다. 할 일을 완료하고 회고 작성 시, 사용자의 기분에 따라 달력에 자동으로 감정 기록 스티커가 표시됩니다. 이 감정 기록 스티커를 통해 사용자는 자신의 감정 패턴을 시각적으로 파악하고, 특정 기분이 발생한 원인을 알 수 있습니다. 달력에 스티커가 채워짐에 따라 성취감을 느끼고, 아직 완료하지 못한 일에 대해 회고 기능을 활용하여 개선 방안을 고민할 수 있습니다. 이를 통해 사용자는 지속적인 목표 달성에 동기부여를 받게 됩니다. 회고 기능은 하루 동안의 성과와 개선 가능한 부분을 돌아보고 분석함으로써, 사용자가 더 나은 방향으로 성장할 수 있도록 돕습니다. Taskgrow는 사용자의 일상을 더 풍요롭고 의미있게 만들어주는 동시에, 개인의 감정과 목표 달성을 조화롭게 이끌어내는 서비스입니다. 프로젝트 기획 배경: 사람들이 효과적으로 일상을 관리하고, 집중력을 높이며, 감정을 기록하고 이해하는 서비스가 필요하다.  집중력 향상 : 뽀모도로 기법(25분의 집중 시간과 5분의 휴식 시간)을 활용하여 작업 효율과 집중력을 높이는 요구가 있다.  감정의 이해 : 일상 속에서 자신의 감정 패턴을 파악하고, 특정 감정이 발생한 원인을 이해하고자 하는 욕구가 있다.  성취감 제공 : 자신의 작업을 완료하고 그 결과를 명확히 확인함으로써 성취감을 느끼고 싶다.  자기 개선 : 더 나은 방향으로 성장하고 싶은 욕구가 있다. 기능: 달력: 로그인 후 달력 화면이 보입니다. ✅ 작성된 todo 모두 끝냈을 경우 ✅  회고 미작성시 달력에 DONE 표시 회고 작성시 기분에 따라 달력에 감정 기록 스티커 표시0 ~ 1 : 빨강 CRY 😢2 ~ 3 : 주황 SAD 😕4 ~ 5 : 노랑 SOSO 😐6 ~ 7 : 초록 GOOD 🙂8 ~ 9 : 파랑 NICE 😀10 : 무지개 HAPPY! 🥰❌ 작성된 할 일 끝내지 못했을 경우 ❌ 마우스 커서를 올리면 남은 할 일의 상세 내용이 표시됩니다. 할 일 작성하기: 할 일을 계획 시 할 일과 뽀모도로 계획을 입력합니다. 뽀모도로 이용하기: 할 일을 선택 후, 타이머를 시작합니다. 25분이 지나면 선택한 할 일의 완료 카운트가 1개 올라갑니다. 회고 작성하기: 기분 점수와 회고를 작성합니다. 모든 투두를 완료한 날에 달력에 기분점수에 맞춰서 스티커로 표시됩니다. 마이페이지: 한 달간 사용자의 Todo 통계와 감정 기록 통계를 보여줍니다. Todo 달성률을 보여주고, 달성률에 따른 응원 메시지를 표시합니다. 기분 통계를 보여주므로 한 달간 나의 감정은 어땠는지 파악합니다. 프로젝트 상세 소개: 💡 핵심 기능:    달력에서 날짜를 선택한 후 할 일 페이지에서 할 일과 계획 뽀모도로 개수를 추가합니다. 이때 달력에서 할 일의 개수를 확인할 수 있으며 마우스 커서를 올리면 상세 내용이 보입니다.     할 일을 클릭하면 해당 뽀모도로를 시작할 수 있습니다. 시간의 흐름에 따라 뽀모도로 화면의 변화를 볼 수 있습니다.     뽀모도로가 25분이 되면 해당 할 일의 개수가 1씩 증가합니다.      이미 시작한 뽀모도로(완료 뽀모도로가 1개 이상)의 계획 개수 수정이 불가능합니다.    완료 뽀모도로가 1개 이상일 때만 해당 할 일을 완료할 수 있습니다.       사용자가 해당 할 일을 끝낸 후 완료 체크를 하면 완료 처리가 되며 미완료된 할 일 아래로 순서가 내려갑니다.     사용자는 해당 날짜의 회고를 작성할 수 있습니다. 감정 기록을 1~10까지 할 수 있으며 회고 내용을 작성할 수 있습니다.     달력에 해당 날짜의 기분에 따라 감정 기록 스티커가 다르게 표시됩니다.      할 일을 끝냈지만 회고 미작성 상태시 DONE 스티커가 표시됩니다.       통계 페이지에서 이달의 감정, 할일 통계를 확인할 수 있습니다.  👤 타켓 유저:  시간을 효과적으로 관리하고 싶은 누구나 작업의 효율성을 따지는 사람 집중력을 향상시키고자 하는 사람💘 기대 효과:    할 일 효과적으로 관리 (유저는 달력 및 투두 화면을 통해 시각적으로 파악하고 관리할 수 있습니다)     뽀모도로 기법을 활용한 집중 향상     일상 회고를 통한 감정 회고 (회고 기능을 통해 오늘의 감정을 기록하고 회고 작성을 통해 성취감을 느낄 수 있습니다)     미완료 작업 강조 및 완료 도장 유도 (미완료된 할 일은 숫자로 남음으로써 유저가 미루지 않고 작업을 완료할 수 있도록 독려하고 완료된 작업에는 감정에 따른 여러 도장을 통해 성취감을 얻을 수 있습니다)     데이터 시각화를 통한 파악 (달력 화면에 해당 달의 감정의 변화와 성과 여부를 알 수 있습니다)  개발 환경: 프론트: Zustand 백엔드: 테스크 그로우는 성장을 돕기 위해 끊임없이 고민하고 성장합니다! 🚀 "
    }, {
    "id": 10,
    "url": "http://localhost:4000/%ED%85%8C%EC%8A%A4%ED%81%AC-%EA%B7%B8%EB%A1%9C%EC%9A%B0%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%8B%9C%EC%9E%91%EB%90%98%EC%97%88%EC%9D%84%EA%B9%8C/",
    "title": "테스크 그로우는 어떻게 시작되었을까",
    "body": "2023/12/09 - 개발자의 성장을 돕는 최고의 프로그래밍 훈련소 코드숨에서는 같이 뽀모도로를 합니다. 뽀모도로란 25분 학습하고 5분 쉬는 공부법입니다. cuckoo 타이머를 이용하여 목표한 뽀모도로 개수를 수행합니다. 기존의 뽀모도로 타이머와 스프레드시트를 사용해 일정을 관리하고, 회고를 했으나 분리되어 있어 함께 사용하고 싶다는 니즈가 생겼습니다. 같이 스터디하는 주변 사람들도 이런 니즈가 있다는 것을 알았습니다 사람들은 효과적으로 일상을 관리하고, 집중력을 높이며, 감정을 기록하고 이해하는 서비스가 필요하다! 테스크 그로우가 제공하는 기능은 사실 만들어지기 1년도 더 전부터 코드숨의 대표님인 윤석 님과 이야기가 오가던 서비스였습니다. 여러 가지 이유로 미루다가 단비 같은 프론트 엔지니어 지호 님을 윤석 님께 소개받아 테스크 그로우가 탄생하게 되었습니다. 테스크 그로우라는 이름이 정해지기 전 모여서 작게 프로젝트 만들기 디스코드를 만들었어요. 8월 3일에 디스코드 채널이 생겼고, 8월 5일! Growth-ring이라는 조직이 만들어지고 Taskgrow가 탄생했습니다. 처음에는 백엔드밖에 없었기 때문에 테이블을 정의하고, 사용할 기술을 정했어요. 이후 지호 님이 테스크 그로우에 합류하시고, 같이 테스크 그로우를 만들어 가기 시작했답니다. 지금은 뽀모도로와 투두 기능만 제공하고 있지만, 오래전부터 기획되어 온 만큼 앞으로 만들어질 기능은 아주 많이 있습니다. 테스크 그로우는 어떻게 일하는지 다음 포스트에서 확인해보세요! "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});