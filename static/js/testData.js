const qnaList = [
    {
      q: '1. 이 중 민초단이 아닌 연예인은?',
      a: [
        { answer: 'a. 백종원' },
        { answer: 'b. 이동욱' },
        { answer: 'c. 김선호' },
        { answer: 'd. 박서준' },
      ],
      correct: '2'
    },
    {
      q: '2. 민초가 유래된 나라는?',
      a: [
        { answer: 'a. 영국' },
        { answer: 'b. 프랑스' },
        { answer: 'c. 벨기에' },
        { answer: 'd. 미국' },
      ],
      correct: '0'
    },
    {
      q: '3. 시중에서 파는 민초 음식이 아닌 것은?',
      a: [
        { answer: 'a. 민트초코피자' },
        { answer: 'b. 민트초코볶음밥' },
        { answer: 'c. 민트초코파스타' },
        { answer: 'd. 민트초코돈까스' },
      ],
      correct: '1'
    },
    {
      q: '4. 베스킨라빈스에서 출시된 민초 관련 제품이 아닌 것은?',
      a: [
        { answer: 'a. 아이스 민트 초코파이' },
        { answer: 'b. 민트 초코칩 쿠키 샌드' },
        { answer: 'c. 아이스 민트 초코슈' },
        { answer: 'd. 민트 초코 치약' },
      ],
      correct: '2'
    },
    {
      q: '5. 민트 초코가 만들어지게 된 계기는?',
      a: [
        { answer: 'a. 초코 공장에서 데코할 민트잎을 실수로 빠뜨렸는데 맛있어서' },
        { answer: 'b. 디저트 공모전에 출품하기 위해서' },
        { answer: 'c. 이닦고 초콜릿을 먹다가 맛있어서' },
        { answer: 'd. 녹차인 줄 알고 섞었는데 민트였음' },
      ],
      correct: '1'
    },
  
    {
      q: '6. 오리온이 여름 한정으로 내놓은 민트초코과자 4종에 포함되어있지 않은 것은?',
      a: [
        { answer: 'a. 민초 파이' },
        { answer: 'b. 민초 송이' },
        { answer: 'd. 민초 다이제' },
        { answer: 'c. 민초 쿠키' },
      ],
      correct: '3'
    },
    {
      q: '7. 민트초코 우유를 출시하지 않은 브랜드는?',
      a: [
        { answer: 'a. 서울우유' },
        { answer: 'b. 매일우유' },
        { answer: 'c. 빙그레' },
        { answer: 'd. 덴마크' },
      ],
      correct: '2'
    }
  ]
  
  const infoList = [
    {
      name: '너 민초단 아니지 <반민초단>',
      desc: '연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다! '
    },
    {
      name: '난 너만 봐, 정직한 연애 스타일의 <민초입문자>',
      desc: '연애 유형의 진국인 당신! 소에 해당하는 당신은 상대방만 바라보는 해바라기 연애 스타일이랍니다. 매사에 끈기가 있어 연애를 할 때 성실하고 진심을 다하는 성향을 가지고, 온화하며 따뜻한 마음을 가지고 있어요. 한 번 좋아하면 끝까지 좋아하는 의리파지만 자존심이 쌔 은근히 고집이 강하답니다. 또한 욱하는 성질이 있어 이런 부분들을 조심해야 하고, 질투심이 많아 사랑이 집착으로 바뀔 수 있어 주의해야 된답니다! '
    },
    {
      name: '야 사귀자, 사랑을 쟁취하는 <민초딩>',
      desc: '한 번 좋아하는 사람이 있으면 내 사람으로 만드는 당신! 호랑이에 해당하는 당신은 썸부터 사랑까지 한 번에 직진하는 스타일이랍니다. 연애할 때 주로 이끄는 성향을 가지고 있고, 시원시원한 성격과 유쾌한 성격을 가지고 있어요. 대쪽같은 성격에다 실수를 용납하는 대인배지만 유혹에 약하고 허영때문에 들뜨는 성격이라 다른 이성의 접근에 주의해야 돼요. 또한 내가 한 말로 인해 상대방이 상처를 받을 수 있기 때문에, 항상 말 조심이 필요하답니다!'
    },
    {
      name: '이건 어때? 난 어때? 독특한 매력을 가진 <토끼>',
      desc: '상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.'
    },
    {
      name: '결혼은 언제쯤 할까 신혼여행은 어디로?, 이상적인 연애관의 소유자 <민초 마스터>',
      desc: '상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!'
    },
    {
      name: '난 너만 봐, 정직한 연애 스타일의 <민초 국가대표>',
      desc: '연애 유형의 진국인 당신! 소에 해당하는 당신은 상대방만 바라보는 해바라기 연애 스타일이랍니다. 매사에 끈기가 있어 연애를 할 때 성실하고 진심을 다하는 성향을 가지고, 온화하며 따뜻한 마음을 가지고 있어요. 한 번 좋아하면 끝까지 좋아하는 의리파지만 자존심이 쌔 은근히 고집이 강하답니다. 또한 욱하는 성질이 있어 이런 부분들을 조심해야 하고, 질투심이 많아 사랑이 집착으로 바뀔 수 있어 주의해야 된답니다! '
    }
  ]