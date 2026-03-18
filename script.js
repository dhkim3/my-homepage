const iconPaths = {
  user:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 21a7 7 0 0 0-14 0"></path><circle cx="12" cy="7" r="4"></circle></svg>',
  bell:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.27 5.51a2 2 0 1 1 3.46 0"></path><path d="M12 3v2"></path><path d="M5 8c0-3.31 2.69-6 6-6h2c3.31 0 6 2.69 6 6v4.59l1.7 2.84A1 1 0 0 1 19.84 17H4.16a1 1 0 0 1-.86-1.57L5 12.59z"></path><path d="M9 17a3 3 0 0 0 6 0"></path></svg>',
  card:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M2 10h20"></path></svg>',
  book:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"></path></svg>',
  cap:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 10 12 5 2 10l10 5z"></path><path d="M6 12v5c3 2 9 2 12 0v-5"></path></svg>',
  search:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>',
  plus:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>',
  folder:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>',
  file:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M9 15h6"></path></svg>',
}

const homeStatusData = {
  activity: {
    신청: [
      { title: '직무 역량 강화 워크숍 신청', meta: '교육활동' },
      { title: 'UX 리서치 방법론 교육 신청', meta: '교육활동' },
    ],
    결과보고: [
      { title: '데이터 분석 세미나 결과보고', meta: '교육활동', dday: 'D-0' },
    ],
    완료: [
      { title: '비즈니스 영어 과정 수료', meta: '교육활동' },
      { title: '콘텐츠 마케팅 전략 교육', meta: '교육활동' },
      { title: '디자인 시스템 구축 워크숍', meta: '교육활동' },
    ],
  },
  external: {
    신청: [
      { title: '직무 역량 강화 워크숍 신청', meta: '사외교육' },
      { title: 'UX 리서치 방법론 교육 신청', meta: '사외교육' },
    ],
    결과보고: [
      { title: '서비스 기획 교육 결과보고', meta: '사외교육', dday: 'D-3' },
    ],
    완료: [
      { title: '비즈니스 영어 과정 수료', meta: '사외교육' },
      { title: '콘텐츠 마케팅 전략 교육', meta: '사외교육' },
      { title: '디자인 시스템 구축 워크숍', meta: '사외교육' },
    ],
  },
}

const applicationRowsByMenu = {
  '교육활동 신청': [
    {
      id: 'apply-edu-1',
      year: '2026',
      courseName: '문제해결 워크숍',
      learningMethod: '집합교육',
      period: '2026.03.12 - 2026.03.13',
      hours: '8시간',
      place: '비상교육 러닝센터',
      approvalStatus: '결재대기',
    },
  ],
  '문화활동 신청': [],
  '사외교육 신청': [
    {
      id: 'apply-external-1',
      year: '2026',
      courseName: 'B2B SaaS 실무 전략 세미나',
      learningMethod: '외부 컨퍼런스',
      period: '2026.04.10 - 2026.04.10',
      hours: '4시간',
      place: '코엑스 컨퍼런스룸',
      approvalStatus: '신청가능',
    },
    {
      id: 'apply-external-2',
      year: '2026',
      courseName: '비즈니스 영어 프레젠테이션',
      learningMethod: '어학 과정',
      period: '2026.04.22 - 2026.05.20',
      hours: '12시간',
      place: '러닝허브 강남캠퍼스',
      approvalStatus: '신청가능',
    },
  ],
}

const applicationDetailConfigs = {
  '교육활동 신청': {
    title: '교육활동 신청',
    description: '직무 역량 강화를 위한 교육활동 신청 정보를 입력하고 예산 정보를 함께 확인합니다.',
    breadcrumb: '교육신청 / 교육활동 신청 / 상세 작성',
    budgetSummary: [
      { label: '기지출 총액', value: '100,000원', caption: '승인 완료 기준 반영' },
      { label: '신청 가능 금액', value: '200,000원', caption: '현재 신청 가능 금액' },
      { label: '예상 비용', value: '0원', caption: '저장 전 수정 가능', tone: 'caution' },
    ],
    fields: {
      basic: [
        {
          label: '적용년도',
          type: 'select',
          options: ['2026년', '2025년', '2024년'],
          value: '2026년',
        },
        {
          label: '장소',
          type: 'text',
          value: '비상교육 러닝센터',
        },
        {
          label: '제목',
          type: 'text',
          value: '문제해결 워크숍',
          placeholder: '교육활동 제목을 입력해주세요',
          full: true,
        },
        {
          label: '활동 목적',
          type: 'textarea',
          value:
            '실무 프로젝트에서 필요한 문제정의와 해결 구조화 역량을 강화하고, 팀 내 공통 업무 언어를 정리하기 위한 신청입니다.',
          full: true,
        },
        {
          label: '기간',
          type: 'daterange',
          start: '2026-03-12',
          end: '2026-03-13',
        },
        {
          label: '교육시간',
          type: 'text',
          value: '8시간',
          placeholder: '예: 8시간',
        },
      ],
      cost: [
        {
          label: '예상 비용',
          type: 'inline',
          primaryType: 'number',
          primaryValue: '0',
          primaryPlaceholder: '0',
          secondaryType: 'readonly',
          secondaryValue: '원',
          help: '실제 지급 금액은 결과보고 승인 후 정산 기준으로 반영됩니다.',
        },
      ],
      extra: [
        {
          label: '비고',
          type: 'textarea',
          value:
            '문제해결 관련 내부 프로젝트와 연계해 적용 예정이며, 교육 종료 후 결과보고에 실무 적용 사례를 함께 작성하겠습니다.',
          full: true,
        },
      ],
    },
    notices: [
      {
        title: '교육비/문화비 신청 기준',
        tone: 'info',
        icon: 'book',
        items: [
          '교육비는 4주, 4회 이상 커리큘럼 보유 시 최대 20만 원까지 신청할 수 있습니다.',
          '6주, 6회 이상 커리큘럼 보유 시 2개월 교육비 최대 40만 원까지 신청할 수 있습니다.',
          '연간 패키지 과정, 대학원 등 특이사항은 신청 전 교육기획 Cell에 별도 문의해주세요.',
        ],
      },
      {
        title: '신청 전 유의사항',
        tone: 'rule',
        icon: 'file',
        items: ['교육활동 제목은 아래 형식 기준으로 작성해주세요.'],
        emphasis: '형식: [교육] 과정명_교육기관',
        examples: [
          { tone: 'positive', text: '[교육] 엑셀 강의_비상 온리원 (O)' },
          { tone: 'negative', text: '[교육] 연간 이용권_비상 온리원 (X)' },
          { tone: 'negative', text: '[교육] 클래스 101 (X)' },
        ],
      },
      {
        title: '예상 비용 관련 안내',
        tone: 'warning',
        icon: 'bell',
        items: [
          '신청 이후 결과보고 작성 시 예상 비용은 수정할 수 없습니다.',
          '예상 비용과 실제 사용 비용이 다를 경우 더 적은 금액 기준으로 지급됩니다.',
          '개인 포인트 등은 실제 사용 금액으로 인정되지 않습니다.',
        ],
      },
    ],
  },
  '문화활동 신청': {
    title: '문화활동 신청',
    description: '문화 경험을 통한 인사이트 확장 목적의 신청 정보를 입력하고 문화비 예산을 확인합니다.',
    breadcrumb: '교육신청 / 문화활동 신청 / 상세 작성',
    budgetSummary: [
      { label: '기지출 총액', value: '100,000원', caption: '승인 완료 기준 반영' },
      { label: '신청 가능 금액', value: '100,000원', caption: '현재 신청 가능 금액' },
      { label: '예상 비용', value: '0원', caption: '티켓 및 체험 비용 기준', tone: 'caution' },
    ],
    fields: {
      basic: [
        {
          label: '적용년도',
          type: 'select',
          options: ['2026년', '2025년', '2024년'],
          value: '2026년',
        },
        {
          label: '활동 구분',
          type: 'select',
          options: ['공연/전시', '도서/콘텐츠', '체험형 활동', '기타'],
          value: '공연/전시',
        },
        {
          label: '제목',
          type: 'text',
          value: '선과 치히로의 행방불명 오리지널 투어',
          placeholder: '문화활동 제목을 입력해주세요',
          full: true,
        },
        {
          label: '활동 목적',
          type: 'textarea',
          value:
            '콘텐츠 기획 시 참고할 수 있는 연출과 공간 경험을 직접 체험하고, 스토리텔링 관점의 인사이트를 정리하기 위한 신청입니다.',
          full: true,
        },
        {
          label: '기간',
          type: 'daterange',
          start: '2026-03-20',
          end: '2026-03-20',
        },
        {
          label: '장소',
          type: 'text',
          value: '예술의전당 오페라하우스',
        },
      ],
      cost: [
        {
          label: '예상 비용',
          type: 'inline',
          primaryType: 'number',
          primaryValue: '0',
          primaryPlaceholder: '0',
          secondaryType: 'readonly',
          secondaryValue: '원',
          help: '문화활동비는 티켓 및 공식 프로그램 비용만 반영됩니다.',
        },
      ],
      extra: [
        {
          label: '비고',
          type: 'textarea',
          value:
            '동행 인원 없이 개인 관람으로 진행하며, 티켓 영수증과 프로그램북 사진을 결과보고에 첨부할 예정입니다.',
          full: true,
        },
      ],
    },
    notices: [
      {
        title: '교육비, 문화비 신청 기준(규정 A5040 교육문화활동비 규정)',
        tone: 'info',
        icon: 'book',
        items: [
          '연간 패키지 과정, 대학원 등 특이 사항이 있을 경우, 신청 전 교육기획 Cell에 별도 문의 바랍니다.',
        ],
      },
      {
        title: '신청 전 유의사항',
        tone: 'rule',
        icon: 'file',
        items: ['교육활동 제목은 아래 형식 기준으로 작성해주세요.'],
        emphasis: '양식: [문화] 여행지 또는 문화 활동',
        examples: [
          { tone: 'positive', text: '[문화] 경주 여행 (O)' },
          { tone: 'positive', text: '[문화] 꽃꽂이 원데이 클래스 (O)' },
          { tone: 'negative', text: '[문화] 가족여행 (X)' },
          { tone: 'negative', text: '[문화] 원데이 클래스 (X)' },
        ],
      },
      {
        title: '예상 비용',
        tone: 'warning',
        icon: 'bell',
        items: [
          '예상 비용은 신청 이후 결과 보고 작성 시, 수정할 수 없습니다. 예상 비용과 이후 사용 비용이 다른 경우, 더 적은 비용이 실제 지급됩니다.',
          '개인 포인트 등은 실제 사용액으로 반영하지 않습니다.',
          '교육문화활동비는 본인이 사용한 비용만 지원합니다. (공연 등 1인 티켓비만 지원)',
        ],
      },
    ],
  },
  '사외교육 신청': {
    title: '사외교육 신청',
    description: '외부 교육기관 또는 컨퍼런스 신청 정보를 입력하고 승인 전 필요한 예산 및 일정 정보를 정리합니다.',
    breadcrumb: '교육신청 / 사외교육 신청 / 상세 작성',
    budgetSummary: [
      { label: '기지출 총액', value: '100,000원', caption: '내부 교육 사용 포함' },
      { label: '신청 가능 금액', value: '200,000원', caption: '현재 신청 가능 금액' },
      { label: '예상 비용', value: '0원', caption: '등록비 기준', tone: 'caution' },
    ],
    fields: {
      basic: [
        {
          label: '적용년도',
          type: 'select',
          options: ['2026년', '2025년', '2024년'],
          value: '2026년',
        },
        {
          label: '장소',
          type: 'text',
          value: '코엑스 컨퍼런스룸',
        },
        {
          label: '제목',
          type: 'text',
          value: 'B2B SaaS 실무 전략 세미나',
          placeholder: '사외교육 제목을 입력해주세요',
          full: true,
        },
        {
          label: '활동 목적',
          type: 'textarea',
          value:
            '제품 운영 관점에서 필요한 SaaS 비즈니스 사례와 실무 전략을 학습하고 서비스 개선 인사이트로 연결하기 위한 신청입니다.',
          full: true,
        },
        {
          label: '기간',
          type: 'daterange',
          start: '2026-04-10',
          end: '2026-04-10',
        },
        {
          label: '교육시간',
          type: 'text',
          value: '4시간',
          placeholder: '예: 4시간',
        },
      ],
      cost: [
        {
          label: '예상 비용',
          type: 'inline',
          primaryType: 'number',
          primaryValue: '0',
          primaryPlaceholder: '0',
          secondaryType: 'readonly',
          secondaryValue: '원',
          help: '등록비 외 교통비/숙박비는 별도 승인 정책을 따릅니다.',
        },
        {
          label: '참가 기대 효과',
          type: 'textarea',
          value:
            '세션별 핵심 내용을 요약하고, 제품 운영팀에 공유 가능한 실무 액션 아이템으로 정리할 예정입니다.',
          full: true,
        },
      ],
      extra: [
        {
          label: '비고',
          type: 'textarea',
          value:
            '조기 등록 할인 기간 내 신청 예정이며, 세미나 종료 후 발표자료가 제공되면 결과보고에 첨부하겠습니다.',
          full: true,
        },
        {
          label: '참고 링크',
          type: 'text',
          value: 'https://example.com/seminar',
          full: true,
        },
      ],
    },
    notices: [
      {
        title: '사외교육 신청 기준',
        tone: 'info',
        icon: 'book',
        items: [
          '외부 기관 교육은 업무 연관성과 기대 효과가 명확해야 승인 검토가 가능합니다.',
          '교육기관, 참가비, 일정, 세부 프로그램을 확인할 수 있는 정보가 필요합니다.',
        ],
      },
      {
        title: '신청 전 유의사항',
        tone: 'rule',
        icon: 'file',
        items: [
          '사외교육 제목은 아래 형식 기준으로 작성해주세요.',
        ],
        emphasis: '형식: [사외교육] 과정명_교육기관',
        examples: [
          { tone: 'positive', text: 'O: [사외교육] SaaS 전략 세미나_코엑스' },
          { tone: 'negative', text: 'X: [사외교육] 연간 이용권_외부기관' },
          { tone: 'negative', text: 'X: [사외교육] 클래스 101' },
        ],
      },
      {
        title: '예상 비용 관련 안내',
        tone: 'warning',
        icon: 'bell',
        items: [
          '신청 이후 결과보고 작성 시 예상 비용은 수정할 수 없습니다.',
          '예상 비용과 실제 사용 비용이 다를 경우 더 적은 금액 기준으로 지급됩니다.',
          '등록비 외 기타 부대비용은 승인 정책에 따라 조정됩니다.',
        ],
      },
    ],
  },
}

const reportRowsByMenu = {
  '교육활동 결과보고': [
    {
      id: 'report-edu-1',
      year: '2026',
      courseName: '[교육] 문제해결 세미나',
      period: '2026.03.05 - 2026.03.05',
      hours: '4시간',
      place: '비상교육 러닝센터',
      approvalStatus: '교육신청상태',
      completionStatus: '진행중',
      contentType: '교육비',
    },
  ],
  '문화활동 결과보고': [
    {
      id: 'report-culture-1',
      year: '2026',
      courseName: '[문화] 선과 치히로의 행방불명 오리지널 투어',
      period: '2026.03.05 - 2026.03.05',
      hours: '0',
      place: '예술의전당 오페라하우스',
      approvalStatus: '교육신청상태',
      completionStatus: '진행중',
      contentType: '문화비',
    },
  ],
  '사외교육 결과보고': [],
}

const reportDetailConfigs = {
  '교육활동 결과보고': {
    title: '결과보고',
    breadcrumb: '결과보고 / 교육활동 결과보고 / 상세 작성',
    noticeLead: '결과보고 전 유의사항',
    notices: [
      {
        title: '첨부 파일 안내',
        tone: 'info',
        icon: 'file',
        items: [
          '‘교육문화활동 게시판’에 시스템 입력 내용과 첨부 파일이 자동 게시되며 수정이 어려울 수 있습니다.',
          '아래 항목을 필수 첨부해주세요.',
        ],
        groups: [
          {
            title: '필수 첨부 항목',
            items: ['결과 보고 (2p 이상)', '교육 커리큘럼 (.pdf)'],
          },
          {
            title: '자격증 과정',
            items: ['<strong>자격증 사본 추가 첨부 必</strong>'],
          },
          {
            title: '연간 수강권',
            items: ['<strong>전체 과정 이수 확인증 첨부 必</strong>'],
          },
        ],
      },
      {
        title: '첨부 위치 안내',
        tone: 'warning',
        icon: 'bell',
        items: ['개인정보 보호를 위해 증빙 파일은 전자결재 문서에만 첨부해주세요.'],
        groups: [
          {
            title: '교육역량 관리 시스템 첨부',
            items: ['교육/문화 활동 보고서 파일'],
          },
          {
            title: '전자결재 문서 첨부',
            items: ['영수증, 티켓 등 증빙 파일'],
          },
        ],
      },
    ],
    rowToDetail(row) {
      return {
        basic: [
          { label: '적용년도', type: 'readonly', value: row.year },
          { label: '내용 구분', type: 'readonly', value: row.contentType || '교육비' },
          { label: '제목', type: 'text', value: row.courseName, full: true },
          {
            label: '내용',
            type: 'textarea',
            value: '실무 적용 관점에서 핵심적으로 도움이 되었던 내용과 향후 적용 계획을 정리해주세요.',
            full: true,
          },
        ],
        education: [
          { label: '교육기간', type: 'daterange', start: '2026-03-05', end: '2026-03-05' },
          { label: '교육시간', type: 'text', value: row.hours, placeholder: '예: 4시간' },
          {
            key: 'educationPlace',
            label: '교육장소',
            type: 'text',
            value: row.place || '',
            placeholder: '교육장소를 입력하세요',
            required: true,
          },
          {
            label: '교육평가',
            type: 'radio',
            name: 'reportEvaluation',
            options: [
              { emoji: '😄', label: '강력추천' },
              { emoji: '🙂', label: '추천' },
              { emoji: '😐', label: '보통' },
              { emoji: '🙁', label: '비추천' },
              { emoji: '😠', label: '절대만류' },
            ],
            value: '추천',
            full: true,
          },
        ],
        cost: [
          { label: '예상금액', value: '100,000원', caption: '신청 시 입력 금액' },
          { label: '신청금액', value: '0원', caption: '승인 요청 금액' },
          { label: '지급금액', value: '0원', tone: 'caution', caption: '최종 지급 예정 금액' },
        ],
        requestAmount: '0',
        account: [
          { key: 'accountHolder', label: '예금주', type: 'text', value: '김다훈', placeholder: '예금주를 입력해주세요' },
          { key: 'bank', label: '은행', type: 'text', value: '국민은행', placeholder: '은행명을 입력해주세요' },
          { key: 'accountNumber', label: '계좌번호', type: 'text', value: '123-456-789012', placeholder: '숫자와 하이픈 입력' },
        ],
        uploads: [
          { id: 'report-file-1', name: '결과보고서_v1.pdf', size: '2.4MB' },
          { id: 'report-file-2', name: '교육커리큘럼.pdf', size: '480KB' },
        ],
      }
    },
  },
  '문화활동 결과보고': {
    title: '결과보고',
    breadcrumb: '결과보고 / 문화활동 결과보고 / 상세 작성',
    noticeLead: '결과보고 전 유의사항',
    notices: [
      {
        title: '첨부 파일 안내',
        tone: 'info',
        icon: 'file',
        items: [
          '‘교육문화활동 게시판’에 시스템 입력 내용과 첨부 파일이 자동 게시되며 수정이 어려울 수 있습니다.',
          '아래 항목을 필수 첨부해주세요.',
        ],
        groups: [
          {
            title: '필수 첨부 항목',
            items: ['결과 보고 (2p 이상)'],
          },
        ],
      },
      {
        title: '첨부 위치 안내',
        tone: 'warning',
        icon: 'bell',
        items: ['개인정보 보호를 위해 증빙 파일은 전자결재 문서에만 첨부해주세요.'],
        groups: [
          {
            title: '교육역량 관리 시스템 첨부',
            items: ['교육/문화 활동 보고서 파일'],
          },
          {
            title: '전자결재 문서 첨부',
            items: ['영수증, 티켓 등 증빙 파일'],
          },
        ],
      },
    ],
    rowToDetail(row) {
      return {
        basic: [
          { label: '적용년도', type: 'readonly', value: row.year },
          { label: '내용 구분', type: 'readonly', value: row.contentType || '문화비' },
          { label: '제목', type: 'text', value: row.courseName, full: true },
          {
            label: '내용',
            type: 'textarea',
            value: '문화활동에서 얻은 인사이트와 업무 또는 조직문화 측면의 연결점을 정리해주세요.',
            full: true,
          },
        ],
        education: [
          { label: '교육기간', type: 'daterange', start: '2026-03-05', end: '2026-03-05' },
          {
            key: 'educationPlace',
            label: '교육장소',
            type: 'text',
            value: row.place || '',
            placeholder: '교육장소를 입력하세요',
            required: true,
          },
          {
            label: '교육평가',
            type: 'radio',
            name: 'reportEvaluation',
            options: [
              { emoji: '😄', label: '강력추천' },
              { emoji: '🙂', label: '추천' },
              { emoji: '😐', label: '보통' },
              { emoji: '🙁', label: '비추천' },
              { emoji: '😠', label: '절대만류' },
            ],
            value: '보통',
            full: true,
          },
        ],
        cost: [
          { label: '예상금액', value: '100,000원', caption: '신청 시 입력 금액' },
          { label: '신청금액', value: '0원', caption: '승인 요청 금액' },
          { label: '지급금액', value: '0원', tone: 'caution', caption: '최종 지급 예정 금액' },
        ],
        requestAmount: '0',
        account: [
          { key: 'accountHolder', label: '예금주', type: 'text', value: '김다훈', placeholder: '예금주를 입력해주세요' },
          { key: 'bank', label: '은행', type: 'text', value: '신한은행', placeholder: '은행명을 입력해주세요' },
          { key: 'accountNumber', label: '계좌번호', type: 'text', value: '110-245-889900', placeholder: '숫자와 하이픈 입력' },
        ],
        uploads: [{ id: 'report-file-3', name: '티켓_영수증.jpg', size: '1.1MB' }],
      }
    },
  },
  '사외교육 결과보고': {
    title: '결과보고',
    breadcrumb: '결과보고 / 사외교육 결과보고 / 상세 작성',
    noticeLead: '결과보고 전 유의사항',
    notices: [
      {
        title: '첨부 파일 안내',
        tone: 'info',
        icon: 'file',
        items: [
          '사외교육 결과보고는 시스템 입력 내용과 함께 첨부 파일이 공유되므로 수정이 어려울 수 있습니다.',
          '결과 보고서와 교육 자료 또는 수료 증빙을 함께 첨부해주세요.',
        ],
      },
      {
        title: '첨부 위치 안내',
        tone: 'warning',
        icon: 'bell',
        items: ['개인정보 보호를 위해 증빙 파일은 전자결재 문서에만 첨부해주세요.'],
        groups: [
          {
            title: '교육역량 관리 시스템 첨부',
            items: ['사외교육 결과 보고서 파일'],
          },
          {
            title: '전자결재 문서 첨부',
            items: ['영수증, 티켓 등 증빙 파일'],
          },
        ],
      },
    ],
    rowToDetail(row) {
      return {
        basic: [
          { label: '적용년도', type: 'readonly', value: row.year },
          { label: '내용 구분', type: 'readonly', value: row.contentType || '교육비' },
          { label: '제목', type: 'text', value: row.courseName, full: true },
          {
            label: '내용',
            type: 'textarea',
            value: '참가 세션 핵심 내용과 실무에 적용할 수 있는 포인트를 요약해주세요.',
            full: true,
          },
        ],
        education: [
          { label: '교육기간', type: 'daterange', start: '2026-04-10', end: '2026-04-10' },
          { label: '교육시간', type: 'text', value: row.hours || '4시간', placeholder: '예: 4시간' },
          {
            label: '교육평가',
            type: 'radio',
            name: 'reportEvaluation',
            options: [
              { emoji: '😄', label: '강력추천' },
              { emoji: '🙂', label: '추천' },
              { emoji: '😐', label: '보통' },
              { emoji: '🙁', label: '비추천' },
              { emoji: '😠', label: '절대만류' },
            ],
            value: '추천',
            full: true,
          },
        ],
        cost: [
          { label: '예상금액', value: '200,000원', caption: '신청 시 입력 금액' },
          { label: '신청금액', value: '0원', caption: '승인 요청 금액' },
          { label: '지급금액', value: '0원', tone: 'caution', caption: '최종 지급 예정 금액' },
        ],
        requestAmount: '0',
        account: [
          { key: 'accountHolder', label: '예금주', type: 'text', value: '김다훈', placeholder: '예금주를 입력해주세요' },
          { key: 'bank', label: '은행', type: 'text', value: '우리은행', placeholder: '은행명을 입력해주세요' },
          { key: 'accountNumber', label: '계좌번호', type: 'text', value: '1002-333-445566', placeholder: '숫자와 하이픈 입력' },
        ],
        uploads: [{ id: 'report-file-4', name: '세미나_등록확인서.pdf', size: '620KB' }],
      }
    },
  },
}

const educationStatusRowsByMenu = {
  '교육활동 현황': [
    {
      year: '2026',
      courseName: '문제해결 워크숍',
      period: '2026.03.05 - 2026.03.05',
      hours: '8시간',
      credit: '8점',
      completionStatus: '이수',
    },
  ],
  '문화활동 현황': [
    {
      year: '2026',
      courseName: '선과 치히로의 행방불명 오리지널 투어',
      period: '2026.03.05 - 2026.03.05',
      hours: '0시간',
      credit: '0점',
      completionStatus: '진행중',
    },
  ],
  '사외교육 현황': [
    {
      year: '2026',
      courseName: 'B2B SaaS 실무 전략 세미나',
      period: '2026.04.10 - 2026.04.10',
      hours: '4시간',
      credit: '4점',
      completionStatus: '미이수',
    },
  ],
}

const adminBaseConfigs = {
  '필수 학점/비용 설정': {
    route: '/admin/base/credit-cost',
    title: '필수 학점/비용 설정',
  },
  '보고서 기한 연장': {
    route: '/admin/base/deadline-extension',
    title: '보고서 기한 연장',
    description: '결과보고 제출 기한을 조정하고 연장 정책을 관리하는 관리자 전용 화면입니다.',
    placeholderTitle: '보고서 기한 연장 화면 준비 중',
    placeholderBody:
      '대상자별 보고서 제출 기한 연장, 연장 이력, 정책 예외 처리는 추후 이 영역에서 관리할 수 있습니다.',
  },
}

const adminBaseYearOptions = ['2026', '2025', '2024']

const adminBaseFilterOptions = {
  department: ['전체 부서', '정보시스템 Cell', '프로덕트 Cell', '콘텐츠 Cell', '경영지원 Cell'],
  subOrganization: ['전체 조직', '플랫폼개발팀', '서비스기획팀', '콘텐츠운영팀', '인사운영팀'],
}

const defaultAdminBaseFilters = {
  department: '전체 부서',
  subOrganization: '전체 조직',
  keyword: '',
  joinDate: '',
}

const defaultAdminBaseDraftSettings = {
  requiredCredit: '40',
  cultureBudget: '300000',
  totalBudget: '1500000',
}

const defaultAdminDeadlineFilters = {
  department: '전체 부서',
  year: '2026',
  employeeName: '',
  employeeNumber: '',
}

const adminBaseEmployeeData = {
  재직자: [
    {
      id: 'employee-active-1',
      department: '정보시스템 Cell',
      subOrganization: '플랫폼개발팀',
      name: '김다훈',
      joinDate: '2024-03-04',
      employmentType: '재직',
      requiredCredit: 40,
      cultureBudget: 300000,
      totalBudget: 1500000,
    },
    {
      id: 'employee-active-2',
      department: '정보시스템 Cell',
      subOrganization: '서비스기획팀',
      name: '박서준',
      joinDate: '2023-09-18',
      employmentType: '재직',
      requiredCredit: 36,
      cultureBudget: 280000,
      totalBudget: 1400000,
    },
    {
      id: 'employee-active-3',
      department: '프로덕트 Cell',
      subOrganization: '콘텐츠운영팀',
      name: '이하은',
      joinDate: '2025-01-13',
      employmentType: '재직',
      requiredCredit: 32,
      cultureBudget: 250000,
      totalBudget: 1300000,
    },
    {
      id: 'employee-active-4',
      department: '경영지원 Cell',
      subOrganization: '인사운영팀',
      name: '정유진',
      joinDate: '2022-06-27',
      employmentType: '재직',
      requiredCredit: 30,
      cultureBudget: 220000,
      totalBudget: 1200000,
    },
  ],
  퇴직자: [
    {
      id: 'employee-inactive-1',
      department: '정보시스템 Cell',
      subOrganization: '플랫폼개발팀',
      name: '한지민',
      joinDate: '2021-02-15',
      employmentType: '퇴직',
      requiredCredit: 28,
      cultureBudget: 200000,
      totalBudget: 1000000,
    },
    {
      id: 'employee-inactive-2',
      department: '프로덕트 Cell',
      subOrganization: '서비스기획팀',
      name: '최민석',
      joinDate: '2020-11-09',
      employmentType: '퇴직',
      requiredCredit: 24,
      cultureBudget: 180000,
      totalBudget: 900000,
    },
  ],
}

const adminDeadlineEmployeeData = [
  {
    id: 'deadline-1',
    openYear: '2026',
    department: '정보시스템 Cell',
    employeeNumber: '240031',
    employeeName: '김다훈',
    groupwareId: 'dhkim3',
    isOpen: false,
    appliedDate: '',
  },
  {
    id: 'deadline-2',
    openYear: '2026',
    department: '프로덕트 Cell',
    employeeNumber: '230118',
    employeeName: '이하은',
    groupwareId: 'haeun.lee',
    isOpen: false,
    appliedDate: '',
  },
  {
    id: 'deadline-3',
    openYear: '2025',
    department: '경영지원 Cell',
    employeeNumber: '220087',
    employeeName: '정유진',
    groupwareId: 'yujin.jung',
    isOpen: false,
    appliedDate: '',
  },
]

const defaultAdminBaseMenu = '필수 학점/비용 설정'
const DEV_FORCE_ADMIN_ROLE = true

const viewPathMap = {
  홈: '/',
  교육신청: '/application',
  결과보고: '/report',
  교육현황: '/status',
}

const state = {
  currentView: '홈',
  hasInitialized: false,
  isInitialIndicatorRender: true,
  pendingViewTimer: null,
  pendingBudgetBarFrame: null,
  pendingHomeTransitionFrame: null,
  pendingHomeRevealFrame: null,
  budgetBarsInitialized: false,
  homeAnimationToken: 0,
  application: {
    selectedMenu: '교육활동 신청',
    isDetailOpen: false,
    selectedRowId: null,
    detailDrafts: {},
    courseName: '',
    year: '2026',
    appliedFilters: { courseName: '', year: '2026' },
  },
  report: {
    selectedMenu: '교육활동 결과보고',
    isDetailOpen: false,
    selectedRowId: null,
    detailDraft: null,
    courseName: '',
    year: '2026',
    appliedFilters: { courseName: '', year: '2026' },
  },
  educationStatus: {
    selectedMenu: '교육활동 현황',
    year: '2026',
    completionStatus: '전체',
    keyword: '',
    appliedFilters: {
      year: '2026',
      completionStatus: '전체',
      keyword: '',
    },
  },
  auth: {
    role: 'user',
    isAdmin: false,
  },
  datePicker: {
    isOpen: false,
    visibleMonth: '',
    focusedDate: '',
  },
  adminBase: {
    selectedMenu: defaultAdminBaseMenu,
    selectedEmployeeTab: '재직자',
    year: '2026',
    department: defaultAdminBaseFilters.department,
    subOrganization: defaultAdminBaseFilters.subOrganization,
    keyword: defaultAdminBaseFilters.keyword,
    joinDate: defaultAdminBaseFilters.joinDate,
    appliedFilters: { ...defaultAdminBaseFilters },
    draftSettings: { ...defaultAdminBaseDraftSettings },
    initialRows: JSON.parse(JSON.stringify(adminBaseEmployeeData)),
    rows: JSON.parse(JSON.stringify(adminBaseEmployeeData)),
    selectedRowIds: [],
    dirtyRowIds: [],
    hasPendingSettingChanges: false,
    deadlineFilters: { ...defaultAdminDeadlineFilters },
    appliedDeadlineFilters: { ...defaultAdminDeadlineFilters },
    deadlineInitialRows: JSON.parse(JSON.stringify(adminDeadlineEmployeeData)),
    deadlineRows: JSON.parse(JSON.stringify(adminDeadlineEmployeeData)),
    deadlineDirtyRowIds: [],
    deadlinePendingFocusRowId: '',
    deadlineValidationRowId: '',
  },
}

let confirmCancelHandler = null

const elements = {
  brandButton: document.querySelector('.brand-button'),
  transition: document.getElementById('page-transition'),
  topNav: document.querySelector('.top-nav'),
  topNavIndicator: document.querySelector('.top-nav-indicator'),
  homeTab: document.querySelector('.top-nav .top-tab[data-nav="홈"]'),
  topTabs: Array.from(document.querySelectorAll('.top-nav .top-tab')),
  pageSections: Array.from(document.querySelectorAll('.page-section')),
  progressBars: Array.from(document.querySelectorAll('.progress-fill')),
  customSelects: Array.from(document.querySelectorAll('[data-custom-select]')),
  datePickerLayer: document.querySelector('[data-date-picker-layer]'),
  homeRevealEls: Array.from(document.querySelectorAll('.home-reveal')),
}

const VIEW_TRANSITION_DELAY_MS = 140
const INITIAL_ENTRY_BUFFER_MS = 100
const DATE_PICKER_WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']
let customSelectGlobalsBound = false
let datePickerGlobalsBound = false
let activeBarFrameId = 0
let activeDateField = null

function resetAdminBaseCreditCostState() {
  state.adminBase.selectedEmployeeTab = '재직자'
  state.adminBase.year = '2026'
  state.adminBase.department = defaultAdminBaseFilters.department
  state.adminBase.subOrganization = defaultAdminBaseFilters.subOrganization
  state.adminBase.keyword = defaultAdminBaseFilters.keyword
  state.adminBase.joinDate = defaultAdminBaseFilters.joinDate
  state.adminBase.appliedFilters = { ...defaultAdminBaseFilters }
  state.adminBase.draftSettings = { ...defaultAdminBaseDraftSettings }
  state.adminBase.initialRows = JSON.parse(JSON.stringify(adminBaseEmployeeData))
  state.adminBase.rows = JSON.parse(JSON.stringify(adminBaseEmployeeData))
  state.adminBase.selectedRowIds = []
  state.adminBase.dirtyRowIds = []
  state.adminBase.hasPendingSettingChanges = false
}

function resetAdminDeadlineState() {
  closeDatePicker()
  state.adminBase.deadlineFilters = { ...defaultAdminDeadlineFilters }
  state.adminBase.appliedDeadlineFilters = { ...defaultAdminDeadlineFilters }
  state.adminBase.deadlineInitialRows = JSON.parse(JSON.stringify(adminDeadlineEmployeeData))
  state.adminBase.deadlineRows = JSON.parse(JSON.stringify(adminDeadlineEmployeeData))
  state.adminBase.deadlineDirtyRowIds = []
  state.adminBase.deadlinePendingFocusRowId = ''
  state.adminBase.deadlineValidationRowId = ''
}

function resetAdminMenuState(menu) {
  if (menu === defaultAdminBaseMenu) {
    resetAdminBaseCreditCostState()
    return
  }

  if (menu === '보고서 기한 연장') {
    resetAdminDeadlineState()
  }
}

function normalizePathname(pathname = '/') {
  const sanitized = String(pathname || '/').split(/[?#]/)[0] || '/'

  if (!sanitized.startsWith('/')) {
    return `/${sanitized}`
  }

  if (sanitized.length > 1) {
    return sanitized.replace(/\/+$/, '')
  }

  return sanitized
}

function readRoleFromAuthSource(source) {
  if (!source) {
    return ''
  }

  if (typeof source === 'string') {
    return source
  }

  if (typeof source === 'object') {
    return source.role || source.user?.role || ''
  }

  return ''
}

function resolveCurrentUserRole() {
  if (DEV_FORCE_ADMIN_ROLE) {
    return 'admin'
  }

  const candidates = [
    window.auth,
    window.__AUTH__,
    window.currentUser,
    window.user,
    window.APP_AUTH,
    document.body?.dataset?.role,
  ]

  for (const candidate of candidates) {
    const role = readRoleFromAuthSource(candidate)

    if (role) {
      return String(role).trim().toLowerCase()
    }
  }

  return 'user'
}

function checkIsAdminRole(role) {
  return ['admin', 'administrator', 'superadmin', 'super_admin'].includes(
    String(role || '').trim().toLowerCase(),
  )
}

function applyRoleAccessControl() {
  state.auth.role = resolveCurrentUserRole()
  state.auth.isAdmin = checkIsAdminRole(state.auth.role)

  if (state.auth.isAdmin) {
    return
  }

  document.querySelectorAll('[data-admin-only="true"]').forEach((node) => node.remove())
  elements.topTabs = Array.from(document.querySelectorAll('.top-nav .top-tab'))
  elements.pageSections = Array.from(document.querySelectorAll('.page-section'))
}

function getAdminBaseConfig(menu = state.adminBase.selectedMenu) {
  return adminBaseConfigs[menu] || adminBaseConfigs[defaultAdminBaseMenu]
}

function getPathForCurrentView() {
  if (state.currentView === '기초정보') {
    return getAdminBaseConfig().route
  }

  return viewPathMap[state.currentView] || '/'
}

function updateBrowserPath(pathname, { replace = false } = {}) {
  if (window.location.protocol === 'file:') {
    return
  }

  const targetPath = normalizePathname(pathname)
  const currentPath = normalizePathname(window.location.pathname)

  if (targetPath === currentPath) {
    return
  }

  try {
    const method = replace ? 'replaceState' : 'pushState'
    window.history[method]({}, '', targetPath)
  } catch (error) {
    console.warn('라우팅 경로를 갱신하지 못했습니다.', error)
  }
}

function resolveRouteState(pathname = window.location.pathname) {
  const normalizedPath = normalizePathname(pathname)

  if (normalizedPath === '/admin/base' || normalizedPath === '/admin/base/credit-cost') {
    return {
      view: '기초정보',
      adminMenu: '필수 학점/비용 설정',
      canonicalPath: getAdminBaseConfig('필수 학점/비용 설정').route,
    }
  }

  if (normalizedPath === '/admin/base/deadline-extension') {
    return {
      view: '기초정보',
      adminMenu: '보고서 기한 연장',
      canonicalPath: getAdminBaseConfig('보고서 기한 연장').route,
    }
  }

  const matchedView =
    Object.entries(viewPathMap).find(([, path]) => path === normalizedPath)?.[0] || '홈'

  return {
    view: matchedView,
    adminMenu: defaultAdminBaseMenu,
    canonicalPath: viewPathMap[matchedView] || '/',
  }
}

function applyRouteState(routeState, { replaceHistory = false } = {}) {
  if (routeState.view === '기초정보' && !state.auth.isAdmin) {
    state.adminBase.selectedMenu = defaultAdminBaseMenu
    state.currentView = '홈'
    updateBrowserPath('/', { replace: true })
    return
  }

  state.currentView = routeState.view

  if (routeState.view === '기초정보') {
    state.adminBase.selectedMenu = routeState.adminMenu || defaultAdminBaseMenu
  }

  if (replaceHistory && routeState.canonicalPath) {
    updateBrowserPath(routeState.canonicalPath, { replace: true })
  }
}

function formatAdminCurrency(value) {
  const numericValue = Number(String(value || '').replace(/[^\d]/g, '')) || 0
  return numericValue.toLocaleString('ko-KR')
}

function sanitizeNumericValue(value) {
  return String(value || '').replace(/[^\d]/g, '')
}

function isValidDateValue(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ''))) {
    return false
  }

  const [year, month, day] = String(value).split('-').map(Number)
  const date = new Date(year, month - 1, day)

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  )
}

function parseDateValue(value) {
  if (!isValidDateValue(value)) {
    return null
  }

  const [year, month, day] = String(value).split('-').map(Number)
  return new Date(year, month - 1, day)
}

function formatDateValue(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function getTodayDateValue() {
  return formatDateValue(new Date())
}

function getVisibleMonthValue(value = '') {
  const parsedDate = parseDateValue(value) || new Date()
  return `${parsedDate.getFullYear()}-${String(parsedDate.getMonth() + 1).padStart(2, '0')}`
}

function parseVisibleMonthValue(monthValue = '') {
  const [year, month] = String(monthValue).split('-').map(Number)

  if (!year || !month) {
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth(), 1)
  }

  return new Date(year, month - 1, 1)
}

function formatVisibleMonthLabel(monthValue = '') {
  const monthDate = parseVisibleMonthValue(monthValue)
  return `${monthDate.getFullYear()}년 ${monthDate.getMonth() + 1}월`
}

function shiftVisibleMonth(monthValue = '', offset = 0) {
  const monthDate = parseVisibleMonthValue(monthValue)
  monthDate.setMonth(monthDate.getMonth() + offset)
  return getVisibleMonthValue(formatDateValue(monthDate))
}

function getDatePickerChevron(direction = 'prev') {
  return direction === 'prev'
    ? '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M9.5 3.5 5 8l4.5 4.5" /></svg>'
    : '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m6.5 3.5 4.5 4.5-4.5 4.5" /></svg>'
}

function getDatePickerGridDates(monthValue = '') {
  const monthDate = parseVisibleMonthValue(monthValue)
  const year = monthDate.getFullYear()
  const monthIndex = monthDate.getMonth()
  const firstDayIndex = new Date(year, monthIndex, 1).getDay()
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const cells = []

  for (let index = 0; index < firstDayIndex; index += 1) {
    cells.push(null)
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(formatDateValue(new Date(year, monthIndex, day)))
  }

  while (cells.length % 7 !== 0) {
    cells.push(null)
  }

  return cells
}

function syncDateFieldDisplay(fieldEl, value) {
  if (!fieldEl) {
    return
  }

  const trigger = fieldEl.querySelector('[data-date-trigger]')
  const textNode = fieldEl.querySelector('[data-date-trigger-text]')
  const placeholder = trigger?.dataset.placeholder || '날짜 선택'
  const safeValue = isValidDateValue(value) ? value : ''

  fieldEl.classList.toggle('is-empty', !safeValue)

  if (trigger) {
    trigger.dataset.dateValue = safeValue
    trigger.setAttribute('aria-label', safeValue || placeholder)
    trigger.classList.toggle('is-placeholder', !safeValue)
  }

  if (textNode) {
    textNode.textContent = safeValue || placeholder
  }
}

function createCustomDateFieldMarkup({
  value = '',
  placeholder = '날짜 선택',
  hiddenAttributes = '',
  disabled = false,
  extraClasses = '',
  ariaLabel = '',
}) {
  const safeValue = isValidDateValue(value) ? value : ''
  const className = ['field', 'date-field', 'custom-date-field', extraClasses, !safeValue ? 'is-empty' : '', disabled ? 'is-disabled' : '']
    .filter(Boolean)
    .join(' ')

  return `
    <label class="${className}" data-date-field>
      <input type="hidden" value="${safeValue}" ${hiddenAttributes} data-date-input-hidden />
      <button
        type="button"
        class="custom-date-trigger${safeValue ? '' : ' is-placeholder'}"
        data-date-trigger
        data-placeholder="${placeholder}"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-label="${ariaLabel || placeholder}"
        ${disabled ? 'disabled' : ''}
      >
        <span class="custom-date-trigger-text" data-date-trigger-text>${safeValue || placeholder}</span>
        <span class="date-field-icon" aria-hidden="true"></span>
      </button>
    </label>
  `
}

function createAdminSelectMarkup({ value, options, inputKey, widthClass = '' }) {
  const selectClassName = `custom-select ${widthClass}`.trim()

  return `
    <div class="${selectClassName}" data-custom-select>
      <button
        type="button"
        class="custom-select-trigger"
        aria-haspopup="listbox"
        aria-expanded="false"
      >
        <span class="custom-select-value">${value}</span>
      </button>
      <div class="custom-select-menu" role="listbox">
        ${options
          .map(
            (option) => `
              <button
                type="button"
                class="custom-select-option${option === value ? ' is-selected' : ''}"
                data-value="${option}"
              >${option}</button>
            `,
          )
          .join('')}
      </div>
      <input type="hidden" value="${value}" data-admin-base-input="${inputKey}" />
    </div>
  `
}

function filterAdminBaseRows(tab = state.adminBase.selectedEmployeeTab) {
  const filters = state.adminBase.appliedFilters
  const rows = state.adminBase.rows[tab] || []

  return rows.filter((row) => {
    const matchesDepartment =
      filters.department === '전체 부서' || row.department === filters.department
    const matchesSubOrganization =
      filters.subOrganization === '전체 조직' || row.subOrganization === filters.subOrganization
    const matchesKeyword =
      !filters.keyword || row.name.toLowerCase().includes(filters.keyword.toLowerCase())
    const matchesJoinDate = !filters.joinDate || row.joinDate === filters.joinDate

    return matchesDepartment && matchesSubOrganization && matchesKeyword && matchesJoinDate
  })
}

function renderAdminBaseEmptyRow() {
  return `
    <tr>
      <td colspan="8" class="empty-cell">
        <div class="empty-state compact admin-base-empty-state">
          <div class="empty-icon">
            <span class="icon-box" data-icon="folder"></span>
          </div>
          <p class="empty-title">조회 조건에 맞는 대상자가 없습니다.</p>
          <p class="admin-base-empty-copy">필터를 조정하거나 검색 조건을 초기화한 뒤 다시 확인해주세요.</p>
        </div>
      </td>
    </tr>
  `
}

function renderAdminBaseTableRows() {
  const rows = filterAdminBaseRows()

  if (!rows.length) {
    return renderAdminBaseEmptyRow()
  }

  return rows
    .map((row) => {
      const isChecked = state.adminBase.selectedRowIds.includes(row.id)
      const isDirty = isAdminBaseRowDirty(row)

      return `
        <tr class="${isChecked ? 'is-selected' : ''}${isDirty ? ' is-dirty' : ''}" data-admin-base-row="${row.id}">
          <td>
            <label class="admin-base-check">
              <input type="checkbox" data-admin-base-row-select="${row.id}"${isChecked ? ' checked' : ''} />
            </label>
          </td>
          <td class="col-change-cell">
            <span class="admin-dirty-badge${isDirty ? '' : ' is-muted'}" data-admin-base-row-status="${row.id}">${isDirty ? '변경됨' : '변경 없음'}</span>
          </td>
          <td>${row.department}</td>
          <td>
            <div class="admin-name-cell">
              <span>${row.name}</span>
            </div>
          </td>
          <td>${row.joinDate.replace(/-/g, '.')}</td>
          <td class="align-right">
            <input
              type="text"
              class="admin-base-table-input align-right"
              value="${formatAdminCurrency(row.requiredCredit)}"
              inputmode="numeric"
              data-admin-base-cell-input="${row.id}"
              data-field="requiredCredit"
              aria-label="${row.name} 필수학점"
            />
          </td>
          <td class="align-right">
            <input
              type="text"
              class="admin-base-table-input align-right"
              value="${formatAdminCurrency(row.cultureBudget)}"
              inputmode="numeric"
              data-admin-base-cell-input="${row.id}"
              data-field="cultureBudget"
              aria-label="${row.name} 문화활동비"
            />
          </td>
          <td class="align-right">
            <input
              type="text"
              class="admin-base-table-input align-right"
              value="${formatAdminCurrency(row.totalBudget)}"
              inputmode="numeric"
              data-admin-base-cell-input="${row.id}"
              data-field="totalBudget"
              aria-label="${row.name} 전체비용"
            />
          </td>
        </tr>
      `
    })
    .join('')
}

function renderAdminBaseHeaderActions() {
  const headerActionsNode = document.querySelector('[data-admin-base-header-actions]')

  if (!headerActionsNode) {
    return
  }

  headerActionsNode.innerHTML = ''
}

function renderAdminBaseCreditCostPage() {
  const contentNode = document.querySelector('[data-admin-base-content]')

  if (!contentNode) {
    return
  }

  const selectedTab = state.adminBase.selectedEmployeeTab
  const rows = filterAdminBaseRows(selectedTab)
  const activeCount = state.adminBase.rows.재직자.length
  const inactiveCount = state.adminBase.rows.퇴직자.length
  const visibleRowIds = rows.map((row) => row.id)
  const selectedCount = state.adminBase.selectedRowIds.length
  const selectedVisibleCount = visibleRowIds.filter((id) => state.adminBase.selectedRowIds.includes(id)).length
  const allVisibleSelected = Boolean(visibleRowIds.length) && selectedVisibleCount === visibleRowIds.length
  const someVisibleSelected = selectedVisibleCount > 0 && !allVisibleSelected
  const dirtyCount = getAdminBaseDirtyCount()

  contentNode.innerHTML = `
    <section class="card admin-filter-card">
      <div class="admin-filter-grid admin-filter-grid-compact">
        <div class="admin-filter-field">
          <label class="detail-field-label">년도</label>
          ${createAdminSelectMarkup({
            value: `${state.adminBase.year}년`,
            options: adminBaseYearOptions.map((year) => `${year}년`),
            inputKey: 'year',
          })}
        </div>
        <div class="admin-filter-field">
          <label class="detail-field-label">부서</label>
          ${createAdminSelectMarkup({
            value: state.adminBase.department,
            options: adminBaseFilterOptions.department,
            inputKey: 'department',
          })}
        </div>
        <div class="admin-filter-field">
          <label class="detail-field-label">이름</label>
          <label class="field">
            <input
              type="text"
              placeholder="이름 입력"
              value="${state.adminBase.keyword}"
              data-admin-base-input="keyword"
            />
          </label>
        </div>
        <div class="admin-filter-field">
          <label class="detail-field-label">입사일</label>
          ${createCustomDateFieldMarkup({
            value: state.adminBase.joinDate,
            placeholder: '입사일 선택',
            hiddenAttributes: 'data-admin-base-input="joinDate"',
            ariaLabel: '입사일',
          })}
        </div>
        <div class="admin-filter-field admin-filter-submit">
          <label class="detail-field-label">검색</label>
          <button type="button" class="ghost-button admin-search-button" data-admin-base-action="search" aria-label="검색">
            <span class="icon-box small" data-icon="search"></span>
          </button>
        </div>
      </div>
    </section>

    <section class="card admin-table-card">
      <div class="admin-table-toolbar">
        <div class="admin-table-toolbar-left">
          <div class="admin-employee-tabs" role="tablist" aria-label="대상 구분">
            <button
              type="button"
              class="status-tab${selectedTab === '재직자' ? ' is-active' : ''}"
              data-admin-base-tab="재직자"
            >재직자 <span class="admin-tab-count">${activeCount}</span></button>
            <button
              type="button"
              class="status-tab${selectedTab === '퇴직자' ? ' is-active' : ''}"
              data-admin-base-tab="퇴직자"
            >퇴직자 <span class="admin-tab-count">${inactiveCount}</span></button>
          </div>
        </div>

        <div class="filter-actions admin-table-actions admin-card-actions">
          <button type="button" class="danger-secondary-button" data-admin-base-action="delete-selected"${selectedCount ? '' : ' disabled'}>선택 삭제</button>
          <button type="button" class="primary-button" data-admin-base-action="save">저장</button>
        </div>
      </div>

      <div class="admin-table-meta">
        <p>총 <strong>${rows.length}</strong>건이 조회되었습니다.</p>
        <p data-admin-base-dirty-summary>${dirtyCount ? `저장되지 않은 변경사항이 <strong>${dirtyCount}건</strong> 있습니다.` : '행별 직접 수정 후 저장하면 최종 반영됩니다.'}</p>
      </div>

      <div class="admin-batch-toolbar is-active">
        <div class="admin-setting-grid admin-setting-grid-compact">
          <div class="admin-setting-field">
            <label class="detail-field-label">필수학점</label>
            <label class="field">
              <input
                type="text"
                inputmode="numeric"
                value="${formatAdminCurrency(state.adminBase.draftSettings.requiredCredit)}"
                data-admin-base-setting="requiredCredit"
              />
            </label>
          </div>
          <div class="admin-setting-field">
            <label class="detail-field-label">문화활동비</label>
            <label class="field">
              <input
                type="text"
                inputmode="numeric"
                value="${formatAdminCurrency(state.adminBase.draftSettings.cultureBudget)}"
                data-admin-base-setting="cultureBudget"
              />
            </label>
          </div>
          <div class="admin-setting-field">
            <label class="detail-field-label">전체비용</label>
            <label class="field">
              <input
                type="text"
                inputmode="numeric"
                value="${formatAdminCurrency(state.adminBase.draftSettings.totalBudget)}"
                data-admin-base-setting="totalBudget"
              />
            </label>
          </div>
          <div class="admin-setting-actions">
            <button
              type="button"
              class="primary-button secondary-action-button"
              data-admin-base-action="apply-settings"${selectedCount ? '' : ' disabled'}
            >선택 ${selectedCount}건에 적용</button>
          </div>
        </div>
      </div>

      <div class="table-scroll table-scroll-fixed admin-table-scroll">
        <table class="admin-base-table">
          <thead>
            <tr>
              <th class="col-check">
                <input type="checkbox" data-admin-base-select-all aria-label="전체 선택"${allVisibleSelected ? ' checked' : ''} data-indeterminate="${someVisibleSelected ? 'true' : 'false'}" />
              </th>
              <th class="col-change">상태</th>
              <th>부서명</th>
              <th>성명</th>
              <th class="col-date">입사일</th>
              <th class="col-number align-right">필수학점</th>
              <th class="col-number align-right">문화활동비</th>
              <th class="col-number align-right">전체비용</th>
            </tr>
          </thead>
          <tbody>
            ${renderAdminBaseTableRows()}
          </tbody>
        </table>
      </div>
    </section>
  `

  bindCustomSelects()
  syncAdminBaseSelectAllState()
}

function renderAdminBasePlaceholderPage(config) {
  const contentNode = document.querySelector('[data-admin-base-content]')

  if (!contentNode) {
    return
  }

  contentNode.innerHTML = `
    <section class="card admin-base-placeholder">
      <div class="empty-state compact admin-base-empty-state">
        <div class="empty-icon">
          <span class="icon-box" data-icon="folder"></span>
        </div>
        <p class="empty-title">${config.placeholderTitle}</p>
        <p class="admin-base-empty-copy">${config.placeholderBody}</p>
      </div>
    </section>
  `
}

function updateAdminBaseRowValue(rowId, field, value) {
  const rows = state.adminBase.rows[state.adminBase.selectedEmployeeTab] || []
  const targetRow = rows.find((row) => row.id === rowId)

  if (!targetRow) {
    return
  }

  targetRow[field] = Number(sanitizeNumericValue(value)) || 0
}

function getAdminBaseInitialRow(rowId) {
  return Object.values(state.adminBase.initialRows)
    .flat()
    .find((row) => row.id === rowId) || null
}

function isAdminBaseRowDirty(row) {
  const initialRow = getAdminBaseInitialRow(row.id)

  if (!initialRow) {
    return false
  }

  return (
    Number(row.requiredCredit || 0) !== Number(initialRow.requiredCredit || 0) ||
    Number(row.cultureBudget || 0) !== Number(initialRow.cultureBudget || 0) ||
    Number(row.totalBudget || 0) !== Number(initialRow.totalBudget || 0)
  )
}

function getAdminBaseDirtyRowIds() {
  return Object.values(state.adminBase.rows)
    .flat()
    .filter((row) => isAdminBaseRowDirty(row))
    .map((row) => row.id)
}

function getAdminBaseDirtyCount() {
  return getAdminBaseDirtyRowIds().length
}

function updateAdminBaseDirtySummaryUI() {
  const dirtySummaryNode = document.querySelector('[data-admin-base-dirty-summary]')

  if (!dirtySummaryNode) {
    return
  }

  const dirtyCount = getAdminBaseDirtyCount()
  dirtySummaryNode.innerHTML = dirtyCount
    ? `저장되지 않은 변경사항이 <strong>${dirtyCount}건</strong> 있습니다.`
    : '행별 직접 수정 후 저장하면 최종 반영됩니다.'
}

function refreshAdminBaseRowDerivedUI(rowId) {
  const row = Object.values(state.adminBase.rows)
    .flat()
    .find((item) => item.id === rowId)
  const rowNode = document.querySelector(`[data-admin-base-row="${rowId}"]`)
  const statusNode = document.querySelector(`[data-admin-base-row-status="${rowId}"]`)

  if (!row || !rowNode || !statusNode) {
    updateAdminBaseDirtySummaryUI()
    return
  }

  const isDirty = isAdminBaseRowDirty(row)
  rowNode.classList.toggle('is-dirty', isDirty)
  statusNode.classList.toggle('is-muted', !isDirty)
  statusNode.textContent = isDirty ? '변경됨' : '변경 없음'
  updateAdminBaseDirtySummaryUI()
}

function syncAdminBaseSelectAllState() {
  const selectAll = document.querySelector('[data-admin-base-select-all]')

  if (!selectAll) {
    return
  }

  const visibleRowIds = filterAdminBaseRows().map((row) => row.id)
  const selectedVisibleCount = visibleRowIds.filter((id) => state.adminBase.selectedRowIds.includes(id)).length

  selectAll.checked = Boolean(visibleRowIds.length) && selectedVisibleCount === visibleRowIds.length
  selectAll.indeterminate = selectedVisibleCount > 0 && selectedVisibleCount < visibleRowIds.length
}

function executeAdminBaseSearch() {
  state.adminBase.appliedFilters = {
    department: state.adminBase.department,
    subOrganization: state.adminBase.subOrganization,
    keyword: state.adminBase.keyword,
    joinDate: state.adminBase.joinDate,
  }
  state.adminBase.selectedRowIds = []
  renderAdminBaseContent()
}

function applyAdminBaseDraftSettingsToRows() {
  const targetRows = filterAdminBaseRows().filter((row) =>
    state.adminBase.selectedRowIds.includes(row.id),
  )

  if (!targetRows.length) {
    return false
  }

  targetRows.forEach((row) => {
    row.requiredCredit = Number(state.adminBase.draftSettings.requiredCredit || 0)
    row.cultureBudget = Number(state.adminBase.draftSettings.cultureBudget || 0)
    row.totalBudget = Number(state.adminBase.draftSettings.totalBudget || 0)
  })

  state.adminBase.hasPendingSettingChanges = false
  return true
}

function removeSelectedAdminBaseRows() {
  const activeTab = state.adminBase.selectedEmployeeTab
  state.adminBase.rows[activeTab] = (state.adminBase.rows[activeTab] || []).filter(
    (row) => !state.adminBase.selectedRowIds.includes(row.id),
  )
  state.adminBase.initialRows[activeTab] = (state.adminBase.initialRows[activeTab] || []).filter(
    (row) => !state.adminBase.selectedRowIds.includes(row.id),
  )
  state.adminBase.dirtyRowIds = state.adminBase.dirtyRowIds.filter(
    (id) => !state.adminBase.selectedRowIds.includes(id),
  )
  state.adminBase.selectedRowIds = []
}

function filterAdminDeadlineRows() {
  const filters = state.adminBase.appliedDeadlineFilters

  return (state.adminBase.deadlineRows || []).filter((row) => {
    const matchesDepartment =
      filters.department === '전체 부서' || row.department === filters.department
    const matchesYear = row.openYear === filters.year
    const matchesName =
      !filters.employeeName ||
      row.employeeName.toLowerCase().includes(filters.employeeName.toLowerCase())
    const matchesEmployeeNumber =
      !filters.employeeNumber || row.employeeNumber.includes(filters.employeeNumber)

    return matchesDepartment && matchesYear && matchesName && matchesEmployeeNumber
  })
}

function getAdminDeadlineInitialRow(rowId) {
  return state.adminBase.deadlineInitialRows.find((row) => row.id === rowId) || null
}

function normalizeAdminDeadlineRowState(row) {
  const isOpen = Boolean(row?.isOpen)

  return {
    isOpen,
    appliedDate: isOpen ? String(row?.appliedDate || '') : '',
  }
}

function isAdminDeadlineRowDirty(row) {
  const initialRow = getAdminDeadlineInitialRow(row.id)

  if (!initialRow) {
    return false
  }

  const normalizedCurrent = normalizeAdminDeadlineRowState(row)
  const normalizedInitial = normalizeAdminDeadlineRowState(initialRow)

  return (
    normalizedCurrent.isOpen !== normalizedInitial.isOpen ||
    normalizedCurrent.appliedDate !== normalizedInitial.appliedDate
  )
}

function syncAdminDeadlineDirtyState(rowId = '') {
  if (rowId) {
    const row = state.adminBase.deadlineRows.find((item) => item.id === rowId)

    if (!row) {
      return
    }

    state.adminBase.deadlineDirtyRowIds = isAdminDeadlineRowDirty(row)
      ? [...new Set([...state.adminBase.deadlineDirtyRowIds, rowId])]
      : state.adminBase.deadlineDirtyRowIds.filter((id) => id !== rowId)
    return
  }

  state.adminBase.deadlineDirtyRowIds = state.adminBase.deadlineRows
    .filter((row) => isAdminDeadlineRowDirty(row))
    .map((row) => row.id)
}

function renderAdminDeadlineEmptyRow() {
  return `
    <tr>
      <td colspan="7" class="empty-cell">
        <div class="empty-state compact admin-base-empty-state">
          <div class="empty-icon">
            <span class="icon-box" data-icon="folder"></span>
          </div>
          <p class="empty-title">조회된 대상이 없습니다.</p>
          <p class="admin-base-empty-copy">검색 조건을 조정한 뒤 다시 확인해주세요.</p>
        </div>
      </td>
    </tr>
  `
}

function renderAdminDeadlineRows() {
  const rows = filterAdminDeadlineRows()

  if (!rows.length) {
    return renderAdminDeadlineEmptyRow()
  }

  return rows
    .map((row) => {
      const isDateDisabled = !row.isOpen
      const isDateEmpty = String(row.appliedDate || '').trim() === ''
      const isInvalid = row.id === state.adminBase.deadlineValidationRowId
      const isDirty = isAdminDeadlineRowDirty(row)

      return `
        <tr class="${isDirty ? 'is-dirty' : ''}">
          <td class="col-change-cell">
            <span class="admin-dirty-badge${isDirty ? '' : ' is-muted'}">${isDirty ? '변경됨' : '변경 없음'}</span>
          </td>
          <td class="align-right">${row.openYear}</td>
          <td class="align-right">${row.employeeNumber}</td>
          <td>
            <div class="admin-name-cell">
              <span class="admin-table-ellipsis" title="${row.employeeName}">${row.employeeName}</span>
            </div>
          </td>
          <td>
            <span class="admin-table-ellipsis" title="${row.groupwareId}">${row.groupwareId}</span>
          </td>
          <td>
            <label class="admin-toggle">
              <input type="checkbox" data-admin-deadline-toggle="${row.id}"${row.isOpen ? ' checked' : ''} />
              <span class="admin-toggle-track">
                <span class="admin-toggle-thumb"></span>
              </span>
              <span class="admin-toggle-label">${row.isOpen ? '연장' : '취소'}</span>
            </label>
          </td>
          <td>
            ${createCustomDateFieldMarkup({
              value: row.appliedDate || '',
              placeholder: '날짜 선택',
              hiddenAttributes: `data-admin-deadline-date="${row.id}"`,
              disabled: isDateDisabled,
              extraClasses: `admin-deadline-date-field${isInvalid ? ' is-invalid' : ''}`,
              ariaLabel: `${row.employeeName} 연장 날짜`,
            })}
          </td>
        </tr>
      `
    })
    .join('')
}

function renderAdminDeadlinePage() {
  const contentNode = document.querySelector('[data-admin-base-content]')

  if (!contentNode) {
    return
  }

  const filters = state.adminBase.deadlineFilters
  const rows = filterAdminDeadlineRows()
  const dirtyCount = state.adminBase.deadlineDirtyRowIds.length

  contentNode.innerHTML = `
    <section class="card admin-filter-card admin-filter-card-deadline">
      <div class="admin-filter-toolbar">
        <div class="admin-deadline-filter-grid">
          <div class="admin-filter-field">
            <label class="detail-field-label">부서 선택</label>
            ${createAdminSelectMarkup({
              value: filters.department,
              options: adminBaseFilterOptions.department,
              inputKey: 'deadlineDepartment',
            })}
          </div>
          <div class="admin-filter-field">
            <label class="detail-field-label">년도</label>
            ${createAdminSelectMarkup({
              value: `${filters.year}년`,
              options: adminBaseYearOptions.map((year) => `${year}년`),
              inputKey: 'deadlineYear',
            })}
          </div>
          <div class="admin-filter-field">
            <label class="detail-field-label">이름</label>
            <label class="field">
              <input
                type="text"
                placeholder="이름 입력"
                value="${filters.employeeName}"
                data-admin-deadline-input="employeeName"
              />
            </label>
          </div>
          <div class="admin-filter-field">
            <label class="detail-field-label">사번</label>
            <label class="field">
              <input
                type="text"
                placeholder="사번 입력"
                value="${filters.employeeNumber}"
                data-admin-deadline-input="employeeNumber"
              />
            </label>
          </div>
          <div class="admin-filter-field admin-filter-submit">
            <label class="detail-field-label">검색</label>
            <button type="button" class="ghost-button" data-admin-deadline-action="search">
              <span class="icon-box small" data-icon="search"></span>
              검색
            </button>
          </div>
        </div>

      </div>
    </section>

    <section class="card admin-table-card">
      <div class="admin-work-card-head">
        <div class="admin-work-card-copy">
          <h3>연장 대상 설정</h3>
          <p>총 <strong>${rows.length}</strong>건이 조회되었습니다. 행에서 직접 수정한 내용은 저장 버튼을 눌러야 최종 반영됩니다.</p>
        </div>
        <div class="admin-card-actions admin-card-actions-single">
          <button type="button" class="primary-button" data-admin-deadline-action="save">저장</button>
        </div>
      </div>

      <div class="admin-deadline-save-hint${dirtyCount ? ' is-active' : ''}">
        <span class="admin-dirty-badge${dirtyCount ? '' : ' is-muted'}">${dirtyCount ? `${dirtyCount}건 변경됨` : '변경 없음'}</span>
        <p>연장 여부와 연장 날짜를 수정한 뒤 저장 버튼을 눌러 반영합니다.</p>
      </div>

      <div class="table-scroll table-scroll-fixed admin-table-scroll">
        <table class="admin-base-table admin-deadline-table">
          <thead>
            <tr>
              <th class="col-change">상태</th>
              <th class="col-open-year align-right">적용년도</th>
              <th class="col-employee-number align-right">사번</th>
              <th class="col-employee-name">사원명</th>
              <th class="col-groupware">그룹웨어ID</th>
              <th class="col-toggle">연장/취소</th>
              <th class="col-date align-right">연장 날짜</th>
            </tr>
          </thead>
          <tbody>
            ${renderAdminDeadlineRows()}
          </tbody>
        </table>
      </div>
    </section>
  `

  bindCustomSelects()
}

function toggleAdminDeadlineRow(rowId, nextChecked) {
  const row = state.adminBase.deadlineRows.find((item) => item.id === rowId)

  if (!row) {
    return
  }

  row.isOpen = nextChecked
  if (!nextChecked) {
    row.appliedDate = ''
    const activeField = getActiveDateField()
    const activeInput = activeField?.querySelector(`[data-admin-deadline-date="${rowId}"]`)

    if (activeInput) {
      closeDatePicker()
    }
  }

  syncAdminDeadlineDirtyState(rowId)
  state.adminBase.deadlinePendingFocusRowId = nextChecked ? rowId : ''
  state.adminBase.deadlineValidationRowId = ''
}

function updateAdminDeadlineDate(rowId, nextDate) {
  const row = state.adminBase.deadlineRows.find((item) => item.id === rowId)

  if (!row) {
    return
  }

  row.appliedDate = row.isOpen ? nextDate : ''
  syncAdminDeadlineDirtyState(rowId)
  if (row.appliedDate) {
    state.adminBase.deadlineValidationRowId =
      state.adminBase.deadlineValidationRowId === rowId ? '' : state.adminBase.deadlineValidationRowId
  }
}

function getFirstInvalidAdminDeadlineRowId() {
  const invalidRow = state.adminBase.deadlineRows.find((row) => {
    if (!row.isOpen) {
      return false
    }

    return String(row.appliedDate || '').trim() === ''
  })

  return invalidRow?.id || ''
}

function validateAdminDeadlineRows() {
  const invalidRowId = getFirstInvalidAdminDeadlineRowId()
  state.adminBase.deadlineValidationRowId = invalidRowId
  return invalidRowId === ''
}

function focusAdminDeadlineDateInput(rowId) {
  if (!rowId) {
    return
  }

  window.requestAnimationFrame(() => {
    const input = document.querySelector(`[data-admin-deadline-date="${rowId}"]`)
    const fieldEl = input?.closest('[data-date-field]')
    const trigger = fieldEl?.querySelector('[data-date-trigger]')

    if (!input || trigger?.disabled) {
      return
    }

    trigger?.focus()
    openDatePicker(fieldEl)
  })
}

function getCustomSelectElements() {
  return Array.from(document.querySelectorAll('[data-custom-select]'))
}

function renderIcons() {
  document.querySelectorAll('[data-icon]').forEach((node) => {
    node.innerHTML = iconPaths[node.dataset.icon] || ''
  })
}

function closeCustomSelect(selectEl) {
  if (!selectEl) {
    return
  }

  selectEl.classList.remove('is-open')
  const trigger = selectEl.querySelector('.custom-select-trigger')

  if (trigger) {
    trigger.setAttribute('aria-expanded', 'false')
  }
}

function closeAllCustomSelects(exceptEl = null) {
  getCustomSelectElements().forEach((selectEl) => {
    if (selectEl !== exceptEl) {
      closeCustomSelect(selectEl)
    }
  })
}

function openCustomSelect(selectEl) {
  if (!selectEl) {
    return
  }

  closeAllCustomSelects(selectEl)
  selectEl.classList.add('is-open')
  const trigger = selectEl.querySelector('.custom-select-trigger')

  if (trigger) {
    trigger.setAttribute('aria-expanded', 'true')
  }
}

function highlightCustomOption(selectEl, optionEl) {
  const options = Array.from(selectEl.querySelectorAll('.custom-select-option'))
  options.forEach((option) => {
    option.classList.toggle('is-highlighted', option === optionEl)
  })
}

function selectCustomOption(selectEl, optionEl, { shouldClose = true } = {}) {
  if (!selectEl || !optionEl) {
    return
  }

  const hiddenInput = selectEl.querySelector('input[type="hidden"]')
  const valueEl = selectEl.querySelector('.custom-select-value')
  const options = Array.from(selectEl.querySelectorAll('.custom-select-option'))

  options.forEach((option) => {
    const isSelected = option === optionEl
    option.classList.toggle('is-selected', isSelected)
    option.classList.toggle('is-highlighted', false)
  })

  if (valueEl) {
    valueEl.textContent = optionEl.textContent
  }

  if (hiddenInput) {
    hiddenInput.value = optionEl.dataset.value
    hiddenInput.dispatchEvent(new Event('change', { bubbles: true }))
  }

  if (shouldClose) {
    closeCustomSelect(selectEl)
  }
}

function getHighlightedOrSelectedOption(selectEl) {
  return (
    selectEl.querySelector('.custom-select-option.is-highlighted') ||
    selectEl.querySelector('.custom-select-option.is-selected')
  )
}

function moveCustomSelectHighlight(selectEl, direction) {
  const options = Array.from(selectEl.querySelectorAll('.custom-select-option'))

  if (!options.length) {
    return
  }

  const current = getHighlightedOrSelectedOption(selectEl)
  const currentIndex = Math.max(options.indexOf(current), 0)
  const nextIndex =
    direction === 'next'
      ? Math.min(currentIndex + 1, options.length - 1)
      : Math.max(currentIndex - 1, 0)

  highlightCustomOption(selectEl, options[nextIndex])
}

function bindCustomSelects() {
  getCustomSelectElements().forEach((selectEl) => {
    if (selectEl.dataset.bound === 'true') {
      return
    }

    selectEl.dataset.bound = 'true'
    const trigger = selectEl.querySelector('.custom-select-trigger')
    const options = Array.from(selectEl.querySelectorAll('.custom-select-option'))
    const selectedOption =
      selectEl.querySelector('.custom-select-option.is-selected') || options[0] || null

    if (selectedOption) {
      selectCustomOption(selectEl, selectedOption, { shouldClose: false })
    }

    if (trigger) {
      trigger.addEventListener('click', () => {
        if (selectEl.classList.contains('is-open')) {
          closeCustomSelect(selectEl)
        } else {
          openCustomSelect(selectEl)
          highlightCustomOption(selectEl, getHighlightedOrSelectedOption(selectEl))
        }
      })

      trigger.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()

          if (selectEl.classList.contains('is-open')) {
            const option = getHighlightedOrSelectedOption(selectEl)
            selectCustomOption(selectEl, option)
          } else {
            openCustomSelect(selectEl)
            highlightCustomOption(selectEl, getHighlightedOrSelectedOption(selectEl))
          }
        }

        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          event.preventDefault()
          if (!selectEl.classList.contains('is-open')) {
            openCustomSelect(selectEl)
          }
          moveCustomSelectHighlight(selectEl, event.key === 'ArrowDown' ? 'next' : 'prev')
        }

        if (event.key === 'Escape') {
          closeCustomSelect(selectEl)
        }
      })
    }

    options.forEach((option) => {
      option.addEventListener('click', () => {
        selectCustomOption(selectEl, option)
      })

      option.addEventListener('mouseenter', () => {
        highlightCustomOption(selectEl, option)
      })
    })
  })

  if (!customSelectGlobalsBound) {
    document.addEventListener('click', (event) => {
      if (!event.target.closest('[data-custom-select]')) {
        closeAllCustomSelects()
      }
    })

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeAllCustomSelects()
      }
    })

    customSelectGlobalsBound = true
  }
}

function getActiveDateField() {
  if (!activeDateField || !document.body.contains(activeDateField)) {
    activeDateField = null
  }

  return activeDateField
}

function getDateFieldHiddenInput(fieldEl = getActiveDateField()) {
  return fieldEl?.querySelector('[data-date-input-hidden]') || null
}

function getDatePickerFocusValue() {
  return state.datePicker.focusedDate || getDateFieldHiddenInput()?.value || getTodayDateValue()
}

function focusDatePickerDay(value = '') {
  const layer = elements.datePickerLayer

  if (!layer || layer.classList.contains('is-hidden')) {
    return
  }

  window.requestAnimationFrame(() => {
    const target =
      layer.querySelector(`[data-date-day="${value}"]`) ||
      layer.querySelector('[data-date-day].is-selected') ||
      layer.querySelector('[data-date-day].is-today') ||
      layer.querySelector('[data-date-day]')

    target?.focus()
  })
}

function positionDatePickerLayer() {
  const layer = elements.datePickerLayer
  const fieldEl = getActiveDateField()
  const trigger = fieldEl?.querySelector('[data-date-trigger]')

  if (!layer || !fieldEl || !trigger) {
    return
  }

  const popover = layer.querySelector('.date-picker-popover')

  if (!popover) {
    return
  }

  const triggerRect = trigger.getBoundingClientRect()
  const popoverRect = popover.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const gutter = 16

  let left = triggerRect.left
  let top = triggerRect.bottom + 10

  if (left + popoverRect.width > viewportWidth - gutter) {
    left = viewportWidth - gutter - popoverRect.width
  }

  if (left < gutter) {
    left = gutter
  }

  if (top + popoverRect.height > viewportHeight - gutter) {
    top = Math.max(gutter, triggerRect.top - popoverRect.height - 10)
  }

  layer.style.left = `${Math.round(left)}px`
  layer.style.top = `${Math.round(top)}px`
}

function renderDatePickerLayer() {
  const layer = elements.datePickerLayer
  const fieldEl = getActiveDateField()
  const hiddenInput = getDateFieldHiddenInput(fieldEl)
  const trigger = fieldEl?.querySelector('[data-date-trigger]')

  if (!layer || !fieldEl || !hiddenInput || !trigger) {
    return
  }

  const selectedValue = isValidDateValue(hiddenInput.value) ? hiddenInput.value : ''
  const todayValue = getTodayDateValue()
  const focusedValue = isValidDateValue(state.datePicker.focusedDate)
    ? state.datePicker.focusedDate
    : selectedValue || todayValue
  const visibleMonth = state.datePicker.visibleMonth || getVisibleMonthValue(focusedValue)
  const calendarDates = getDatePickerGridDates(visibleMonth)

  state.datePicker.visibleMonth = visibleMonth
  state.datePicker.focusedDate = focusedValue

  layer.innerHTML = `
    <div class="date-picker-popover" role="dialog" aria-modal="false" aria-label="날짜 선택">
      <div class="date-picker-header">
        <button type="button" class="date-picker-nav" data-date-nav="prev" aria-label="이전 달">
          ${getDatePickerChevron('prev')}
        </button>
        <strong class="date-picker-title">${formatVisibleMonthLabel(visibleMonth)}</strong>
        <button type="button" class="date-picker-nav" data-date-nav="next" aria-label="다음 달">
          ${getDatePickerChevron('next')}
        </button>
      </div>
      <div class="date-picker-weekdays">
        ${DATE_PICKER_WEEKDAYS.map((label) => `<span>${label}</span>`).join('')}
      </div>
      <div class="date-picker-grid" role="grid">
        ${calendarDates
          .map((dateValue) => {
            if (!dateValue) {
              return '<span class="date-picker-blank" aria-hidden="true"></span>'
            }

            const dayNumber = Number(dateValue.split('-')[2])
            const classes = [
              'date-picker-day',
              dateValue === selectedValue ? 'is-selected' : '',
              dateValue === todayValue ? 'is-today' : '',
            ]
              .filter(Boolean)
              .join(' ')

            return `
              <button
                type="button"
                class="${classes}"
                data-date-day="${dateValue}"
                aria-pressed="${dateValue === selectedValue ? 'true' : 'false'}"
              >
                ${dayNumber}
              </button>
            `
          })
          .join('')}
      </div>
      <div class="date-picker-footer">
        <button type="button" class="date-picker-today" data-date-today>오늘</button>
      </div>
    </div>
  `

  layer.classList.remove('is-hidden')
  layer.setAttribute('aria-hidden', 'false')
  trigger.setAttribute('aria-expanded', 'true')
  positionDatePickerLayer()
  focusDatePickerDay(focusedValue)
}

function openDatePicker(fieldEl) {
  const nextField = fieldEl?.closest('[data-date-field]')

  if (!nextField) {
    return
  }

  const trigger = nextField.querySelector('[data-date-trigger]')

  if (!trigger || trigger.disabled) {
    return
  }

  if (getActiveDateField() && getActiveDateField() !== nextField) {
    closeDatePicker()
  }

  activeDateField = nextField
  const hiddenInput = getDateFieldHiddenInput(nextField)
  const currentValue = hiddenInput?.value || ''

  state.datePicker.isOpen = true
  state.datePicker.focusedDate = isValidDateValue(currentValue) ? currentValue : getTodayDateValue()
  state.datePicker.visibleMonth = getVisibleMonthValue(state.datePicker.focusedDate)
  closeAllCustomSelects()
  renderDatePickerLayer()
}

function closeDatePicker({ restoreFocus = false } = {}) {
  const layer = elements.datePickerLayer
  const fieldEl = getActiveDateField()
  const trigger = fieldEl?.querySelector('[data-date-trigger]')

  if (trigger) {
    trigger.setAttribute('aria-expanded', 'false')
  }

  if (layer) {
    layer.innerHTML = ''
    layer.classList.add('is-hidden')
    layer.setAttribute('aria-hidden', 'true')
    layer.style.left = ''
    layer.style.top = ''
  }

  state.datePicker.isOpen = false
  state.datePicker.visibleMonth = ''
  state.datePicker.focusedDate = ''

  if (restoreFocus) {
    trigger?.focus()
  }

  activeDateField = null
}

function selectDateFromPicker(nextValue) {
  const fieldEl = getActiveDateField()
  const hiddenInput = getDateFieldHiddenInput(fieldEl)

  if (!fieldEl || !hiddenInput || !isValidDateValue(nextValue)) {
    return
  }

  hiddenInput.value = nextValue
  syncDateFieldDisplay(fieldEl, nextValue)
  closeDatePicker()
  hiddenInput.dispatchEvent(new Event('change', { bubbles: true }))
}

function moveDatePickerFocus(dayOffset) {
  const currentValue = getDatePickerFocusValue()
  const currentDate = parseDateValue(currentValue)

  if (!currentDate) {
    return
  }

  currentDate.setDate(currentDate.getDate() + dayOffset)
  const nextValue = formatDateValue(currentDate)

  state.datePicker.focusedDate = nextValue
  const nextMonth = getVisibleMonthValue(nextValue)

  if (state.datePicker.visibleMonth !== nextMonth) {
    state.datePicker.visibleMonth = nextMonth
    renderDatePickerLayer()
    return
  }

  focusDatePickerDay(nextValue)
}

function bindDatePickerEvents() {
  if (datePickerGlobalsBound) {
    return
  }

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-date-trigger]')
    const layer = elements.datePickerLayer

    if (trigger) {
      const fieldEl = trigger.closest('[data-date-field]')

      if (getActiveDateField() === fieldEl && state.datePicker.isOpen) {
        closeDatePicker()
      } else {
        openDatePicker(fieldEl)
      }

      return
    }

    const navButton = event.target.closest('[data-date-nav]')

    if (navButton && layer?.contains(navButton)) {
      state.datePicker.visibleMonth = shiftVisibleMonth(
        state.datePicker.visibleMonth,
        navButton.dataset.dateNav === 'prev' ? -1 : 1,
      )
      renderDatePickerLayer()
      return
    }

    const dayButton = event.target.closest('[data-date-day]')

    if (dayButton && layer?.contains(dayButton)) {
      selectDateFromPicker(dayButton.dataset.dateDay)
      return
    }

    const todayButton = event.target.closest('[data-date-today]')

    if (todayButton && layer?.contains(todayButton)) {
      selectDateFromPicker(getTodayDateValue())
      return
    }

    if (!event.target.closest('[data-date-picker-layer]')) {
      closeDatePicker()
    }
  })

  document.addEventListener('keydown', (event) => {
    const trigger = event.target.closest('[data-date-trigger]')

    if (trigger && (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown')) {
      event.preventDefault()
      openDatePicker(trigger.closest('[data-date-field]'))
      return
    }

    if (!state.datePicker.isOpen) {
      return
    }

    if (event.key === 'Escape') {
      event.preventDefault()
      closeDatePicker({ restoreFocus: true })
      return
    }

    const isDateDay = Boolean(event.target.closest('[data-date-day]'))

    if (!isDateDay) {
      return
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      moveDatePickerFocus(-1)
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      moveDatePickerFocus(1)
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      moveDatePickerFocus(-7)
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      moveDatePickerFocus(7)
    }
  })

  datePickerGlobalsBound = true
}

function createStatusItemMarkup(item, showDday) {
  const ddayBadgeClass = showDday && item.dday ? getDdayBadgeClass(item.dday) : ''
  const ddayBadgeLabel = showDday && item.dday ? getDdayBadgeLabel(item.dday) : ''

  return `
    <article class="status-item">
      <div class="status-item-head">
        <p class="status-item-title">${item.title}</p>
        ${showDday && item.dday ? `<span class="dday-badge ${ddayBadgeClass}">${ddayBadgeLabel}</span>` : ''}
      </div>
      <p class="status-item-meta">${item.meta}</p>
    </article>
  `
}

function getDdayBadgeLabel(dday) {
  const normalized = String(dday || '').trim().toUpperCase()

  if (normalized.startsWith('D+')) {
    return '마감'
  }

  if (normalized === 'D-0' || normalized === 'D-DAY') {
    return '오늘'
  }

  return normalized
}

function getDdayBadgeClass(dday) {
  const normalized = String(dday || '').trim().toUpperCase()

  if (normalized.startsWith('D+')) {
    return 'is-ended'
  }

  if (normalized === 'D-0' || normalized === 'D-DAY') {
    return 'is-today'
  }

  if (normalized.startsWith('D-')) {
    const days = Number(normalized.slice(2))

    if (Number.isFinite(days)) {
      return 'is-default'
    }
  }

  return 'is-default'
}

function getTopTab(viewName) {
  return elements.topTabs.find((tab) => tab.dataset.nav === viewName) || null
}

function cancelScheduledActiveBarUpdate() {
  if (!activeBarFrameId) {
    return
  }

  window.cancelAnimationFrame(activeBarFrameId)
  activeBarFrameId = 0
}

function hideActiveBar({ immediate = false } = {}) {
  if (!elements.topNavIndicator) {
    return
  }

  cancelScheduledActiveBarUpdate()

  if (immediate) {
    elements.topNavIndicator.classList.add('no-transition')
  }

  elements.topNavIndicator.style.opacity = '0'

  if (immediate) {
    window.requestAnimationFrame(() => {
      elements.topNavIndicator.classList.remove('no-transition')
    })
  }
}

function scheduleActiveBarUpdate({ immediate = false } = {}) {
  cancelScheduledActiveBarUpdate()

  if (immediate) {
    updateActiveBar({ immediate: true })
    return
  }

  activeBarFrameId = window.requestAnimationFrame(() => {
    activeBarFrameId = 0
    updateActiveBar()
  })
}

function updateActiveBar({ immediate = false } = {}) {
  const activeTab = getTopTab(state.currentView)

  if (!elements.topNav || !elements.topNavIndicator || !activeTab) {
    hideActiveBar({ immediate })
    return
  }

  elements.topNavIndicator.style.width = `${activeTab.offsetWidth}px`
  elements.topNavIndicator.style.height = `${activeTab.offsetHeight}px`
  elements.topNavIndicator.style.transform = `translate(${activeTab.offsetLeft}px, ${activeTab.offsetTop}px)`
  elements.topNavIndicator.style.opacity = '1'
}

function setActiveTab(viewName) {
  elements.topTabs.forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.nav === viewName)
  })

  if (getTopTab(viewName)) {
    scheduleActiveBarUpdate()
  } else {
    hideActiveBar({ immediate: true })
  }
}

function initializeActiveBar() {
  if (!elements.topNavIndicator) {
    return
  }

  elements.topNavIndicator.classList.add('no-transition')
  if (getTopTab(state.currentView)) {
    updateActiveBar()
  } else {
    hideActiveBar({ immediate: true })
  }

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      elements.topNavIndicator.classList.remove('no-transition')
      state.isInitialIndicatorRender = false
    })
  })
}

function showView(viewName) {
  elements.pageSections.forEach((section) => {
    section.classList.toggle('is-active', section.dataset.view === viewName)
  })
}

function getProgressScale(bar) {
  return Number(bar.dataset.width || 0) / 100
}

function applyProgressBarScale(scaleResolver) {
  elements.progressBars.forEach((bar) => {
    const scale = typeof scaleResolver === 'function' ? scaleResolver(bar) : scaleResolver
    bar.style.transform = `scaleX(${scale})`
  })
}

function setProgressBarTransitionDisabled(disabled) {
  elements.progressBars.forEach((bar) => {
    bar.classList.toggle('no-transition', disabled)
  })
}

function cancelPendingBudgetBarFrame() {
  if (state.pendingBudgetBarFrame) {
    window.cancelAnimationFrame(state.pendingBudgetBarFrame)
    state.pendingBudgetBarFrame = null
  }
}

function cancelPendingHomeTransitionFrame() {
  if (state.pendingHomeTransitionFrame) {
    window.cancelAnimationFrame(state.pendingHomeTransitionFrame)
    state.pendingHomeTransitionFrame = null
  }
}

function cancelPendingHomeRevealFrame() {
  if (state.pendingHomeRevealFrame) {
    window.cancelAnimationFrame(state.pendingHomeRevealFrame)
    state.pendingHomeRevealFrame = null
  }
}

function clearPendingHomeAnimationJobs() {
  cancelPendingBudgetBarFrame()
  cancelPendingHomeTransitionFrame()
  cancelPendingHomeRevealFrame()
}

function resetHomeAnimations() {
  clearPendingHomeAnimationJobs()
  elements.homeRevealEls.forEach((el) => {
    el.classList.remove('is-visible')
    el.style.setProperty('--reveal-delay', '0ms')
  })
  setProgressBarTransitionDisabled(true)
  applyProgressBarScale(0)
}

function initializeHomeView() {
  clearPendingHomeAnimationJobs()

  elements.homeRevealEls.forEach((el) => {
    el.style.setProperty('--reveal-delay', '0ms')
    el.classList.add('is-visible')
  })

  setProgressBarTransitionDisabled(true)
  applyProgressBarScale((bar) => getProgressScale(bar))
  state.budgetBarsInitialized = true

  state.pendingBudgetBarFrame = window.requestAnimationFrame(() => {
    setProgressBarTransitionDisabled(false)
    state.pendingBudgetBarFrame = null
  })
}

function playHomeAnimations(token) {
  cancelPendingBudgetBarFrame()
  cancelPendingHomeRevealFrame()

  state.pendingHomeRevealFrame = window.requestAnimationFrame(() => {
    if (token !== state.homeAnimationToken) {
      state.pendingHomeRevealFrame = null
      return
    }

    elements.homeRevealEls.forEach((el, index) => {
      el.style.setProperty('--reveal-delay', `${index * 10}ms`)
      el.classList.add('is-visible')
    })

    setProgressBarTransitionDisabled(false)

    state.pendingBudgetBarFrame = window.requestAnimationFrame(() => {
      if (token !== state.homeAnimationToken) {
        state.pendingBudgetBarFrame = null
        return
      }

      applyProgressBarScale((bar) => getProgressScale(bar))
      state.budgetBarsInitialized = true
      state.pendingBudgetBarFrame = null
    })

    state.pendingHomeRevealFrame = null
  })
}

function replayHomeEntryAnimation(token) {
  elements.transition.classList.remove('is-visible')
  elements.transition.classList.add('is-hidden')

  resetHomeAnimations()

  if (state.pendingViewTimer) {
    window.clearTimeout(state.pendingViewTimer)
  }

  state.pendingViewTimer = window.setTimeout(() => {
    if (token !== state.homeAnimationToken) {
      state.pendingViewTimer = null
      return
    }

    showView('홈')
    setActiveTab('홈')
    elements.transition.classList.remove('is-hidden')
    elements.transition.classList.add('is-visible')
    resetHomeStatusCards()
    syncHomeProgressBars({ animate: true, token })
    updateBrowserPath('/')
    state.pendingViewTimer = null
  }, VIEW_TRANSITION_DELAY_MS)
}

function syncHomeProgressBars({ animate = false, token = state.homeAnimationToken } = {}) {
  if (!elements.progressBars.length) {
    return
  }

  cancelPendingBudgetBarFrame()

  if (!animate) {
    setProgressBarTransitionDisabled(true)
    applyProgressBarScale((bar) => getProgressScale(bar))

    state.pendingBudgetBarFrame = window.requestAnimationFrame(() => {
      if (token !== state.homeAnimationToken) {
        state.pendingBudgetBarFrame = null
        return
      }

      setProgressBarTransitionDisabled(false)
      state.budgetBarsInitialized = true
      state.pendingBudgetBarFrame = null
    })

    return
  }

  resetHomeAnimations()
  playHomeAnimations(token)
}

function finalizeViewChange(nextView, { replayHomeAnimation = true, token = state.homeAnimationToken } = {}) {
  state.currentView = nextView
  showView(nextView)
  setActiveTab(nextView)

  if (nextView === '교육신청') {
    resetApplicationView()
  }

  if (nextView === '결과보고') {
    resetReportView()
  }

  elements.transition.classList.remove('is-hidden')
  elements.transition.classList.add('is-visible')

  if (nextView === '홈') {
    resetHomeStatusCards()
    syncHomeProgressBars({ animate: replayHomeAnimation, token })
  }

  updateBrowserPath(getPathForCurrentView())
}

function setActiveView(nextView, { replayHomeAnimation = true, token = state.homeAnimationToken } = {}) {
  if (nextView === state.currentView) {
    return
  }

  if (state.pendingViewTimer) {
    window.clearTimeout(state.pendingViewTimer)
  }

  elements.transition.classList.remove('is-visible')
  elements.transition.classList.add('is-hidden')

  state.pendingViewTimer = window.setTimeout(() => {
    finalizeViewChange(nextView, { replayHomeAnimation, token })
    state.pendingViewTimer = null
  }, VIEW_TRANSITION_DELAY_MS)
}

function goToHome({ replayAnimation = true } = {}) {
  if (state.currentView === '홈' && !state.pendingViewTimer) {
    return
  }

  state.homeAnimationToken += 1
  const token = state.homeAnimationToken

  if (state.pendingViewTimer) {
    window.clearTimeout(state.pendingViewTimer)
    state.pendingViewTimer = null
  }

  clearPendingHomeAnimationJobs()

  setActiveView('홈', { replayHomeAnimation: replayAnimation, token })
}

function bindTabEvents() {
  if (elements.brandButton) {
    elements.brandButton.addEventListener('click', () => goToHome({ replayAnimation: true }))
  }

  elements.topTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      if (tab.dataset.nav === state.currentView && !state.pendingViewTimer) {
        return
      }

      if (tab.dataset.nav === '홈') {
        goToHome({ replayAnimation: true })
        return
      }

      if (tab.dataset.nav === '기초정보') {
        state.adminBase.selectedMenu = defaultAdminBaseMenu
        renderAdminBaseContent()
      }

      setActiveView(tab.dataset.nav)
    })
  })

}

function renderStatusGroup(group, status) {
  const list = document.querySelector(`[data-list="${group}"]`)
  const items = homeStatusData[group][status] || []
  const showDday = status === '결과보고'

  list.innerHTML = items.map((item) => createStatusItemMarkup(item, showDday)).join('')
}

function updateStatusTabIndicator(group, { animate = true } = {}) {
  const activeTab = document.querySelector(`.status-tab[data-group="${group}"].is-active`)
  const tabsWrap = activeTab?.closest('.status-tabs')
  const indicator = tabsWrap?.querySelector('.status-tabs-indicator')

  if (!tabsWrap || !activeTab || !indicator) {
    return
  }

  indicator.classList.toggle('no-transition', !animate)
  indicator.style.width = `${Math.round(activeTab.offsetWidth)}px`
  indicator.style.height = `${Math.round(activeTab.offsetHeight)}px`
  indicator.style.transform = `translate(${Math.round(activeTab.offsetLeft)}px, ${Math.round(activeTab.offsetTop)}px)`
  indicator.style.opacity = '1'

  if (!animate) {
    window.requestAnimationFrame(() => {
      indicator.classList.remove('no-transition')
    })
  }
}

function updateAllStatusTabIndicators({ animate = true } = {}) {
  const groups = new Set(
    Array.from(document.querySelectorAll('.status-tab[data-group]')).map((button) => button.dataset.group),
  )

  groups.forEach((group) => updateStatusTabIndicator(group, { animate }))
}

function resetHomeStatusCards() {
  const defaultStatus = '결과보고'

  document.querySelectorAll('.status-tab').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.status === defaultStatus)
  })

  renderStatusGroup('activity', defaultStatus)
  renderStatusGroup('external', defaultStatus)
  updateAllStatusTabIndicators({ animate: false })
  updateStatusListHeights()
}

function updateStatusListHeights() {
  document.querySelectorAll('.status-list').forEach((list) => {
    list.style.minHeight = ''
  })
}

function initializeStatusCards() {
  document.querySelectorAll('.status-tab').forEach((button) => {
    button.addEventListener('click', () => {
      const { group, status } = button.dataset
      document
        .querySelectorAll(`.status-tab[data-group="${group}"]`)
        .forEach((tab) => tab.classList.toggle('is-active', tab === button))
      renderStatusGroup(group, status)
      updateStatusTabIndicator(group)
      updateStatusListHeights()
    })
  })

  resetHomeStatusCards()
}

function renderEmptyRow(colspan, year, menu) {
  return `
    <tr>
      <td colspan="${colspan}" class="empty-cell">
        <div class="empty-state">
          <div class="empty-icon">
            <span class="icon-box large" data-icon="folder"></span>
          </div>
          <p class="empty-title">${year}년도 ${menu} 데이터가 없습니다</p>
        </div>
      </td>
    </tr>
  `
}

function renderEducationStatusEmptyRow() {
  return `
    <tr>
      <td colspan="6" class="empty-cell">
        <div class="empty-state education-empty-state">
          <div class="empty-icon">
            <span class="icon-box large" data-icon="folder"></span>
          </div>
          <p class="empty-title">조회 조건에 맞는 교육 이력이 없습니다.</p>
        </div>
      </td>
    </tr>
  `
}

function renderApplicationTable() {
  const target = document.querySelector('[data-table-body="application"]')
  if (!target) {
    return
  }

  const { selectedMenu, appliedFilters } = state.application
  const rows = (applicationRowsByMenu[selectedMenu] || []).filter((row) => {
    const matchesYear = row.year === appliedFilters.year
    const matchesCourse = row.courseName
      .toLowerCase()
      .includes(appliedFilters.courseName.toLowerCase())
    return matchesYear && matchesCourse
  })

  if (!rows.length) {
    target.innerHTML = renderEmptyRow(7, appliedFilters.year, selectedMenu)
    renderIcons()
    return
  }

  target.innerHTML = rows
    .map(
      (row) => `
        <tr class="${selectedMenu === '사외교육 신청' ? 'application-row application-row-clickable' : ''}"${selectedMenu === '사외교육 신청' ? ` data-application-row="${row.id}"` : ''}>
          <td>${row.year}</td>
          <td>${row.courseName}</td>
          <td>${row.learningMethod}</td>
          <td>${row.period}</td>
          <td>${row.hours}</td>
          <td>${row.place}</td>
          <td>${row.approvalStatus}</td>
        </tr>
      `,
    )
    .join('')
}

function renderApplicationFilterActions() {
  const actionNode = document.querySelector('[data-application-filter-actions]')

  if (!actionNode) {
    return
  }

  const shouldShowWrite = state.application.selectedMenu !== '사외교육 신청'

  actionNode.innerHTML = `
    <button type="button" class="ghost-button" data-search-button="application">
      <span class="icon-box small" data-icon="search"></span>
      검색
    </button>
    ${
      shouldShowWrite
        ? `
          <button type="button" class="primary-button" data-application-write-button>
            <span class="icon-box small invert" data-icon="plus"></span>
            작성
          </button>
        `
        : ''
    }
  `

  renderIcons()
}

function renderSelectFieldMarkup(options, value) {
  const resolvedValue = value || options[0] || ''

  return `
    <div class="custom-select" data-custom-select>
      <button type="button" class="custom-select-trigger" aria-haspopup="listbox" aria-expanded="false">
        <span class="custom-select-value">${resolvedValue}</span>
      </button>
      <div class="custom-select-menu" role="listbox">
        ${options
          .map(
            (option) => `
              <button
                type="button"
                class="custom-select-option${option === resolvedValue ? ' is-selected' : ''}"
                data-value="${option}"
              >
                ${option}
              </button>
            `,
          )
          .join('')}
      </div>
      <input type="hidden" value="${resolvedValue}" />
    </div>
  `
}

function formatCurrencyDisplay(value) {
  const raw = String(value ?? '').replace(/[^\d]/g, '')

  if (!raw) {
    return ''
  }

  return Number(raw).toLocaleString('ko-KR')
}

function formatCurrencyWithUnit(value) {
  const formatted = formatCurrencyDisplay(value)
  return formatted ? `${formatted}원` : '0원'
}

function getApplicationSelectedRow(menu = state.application.selectedMenu, rowId = state.application.selectedRowId) {
  return (applicationRowsByMenu[menu] || []).find((row) => row.id === rowId) || null
}

function getApplicationDetailDraft(menu = state.application.selectedMenu) {
  const config = applicationDetailConfigs[menu]

  if (!config) {
    return null
  }

  if (!state.application.detailDrafts[menu]) {
    const expectedCostField = (config.fields.cost || []).find((field) => field.label === '예상 비용')
    state.application.detailDrafts[menu] = {
      expectedCost: String(expectedCostField?.primaryValue || '').replace(/[^\d]/g, ''),
      dateRanges: {},
    }
  }

  return state.application.detailDrafts[menu]
}

function resetApplicationDetailDraft(menu = state.application.selectedMenu) {
  const config = applicationDetailConfigs[menu]

  if (!config) {
    return null
  }

  const expectedCostField = (config.fields.cost || []).find((field) => field.label === '예상 비용')
  state.application.detailDrafts[menu] = {
    expectedCost: String(expectedCostField?.primaryValue || '').replace(/[^\d]/g, ''),
    dateRanges: {},
  }

  return state.application.detailDrafts[menu]
}

function resetApplicationView() {
  state.application.selectedMenu = '교육활동 신청'
  state.application.isDetailOpen = false
  state.application.selectedRowId = null
  state.application.courseName = ''
  state.application.year = '2026'
  state.application.appliedFilters = {
    courseName: '',
    year: '2026',
  }
  state.application.detailDrafts = {}

  const titleNode = document.querySelector('[data-filter-title="application"]')
  const courseInput = document.querySelector('[data-course-input="application"]')
  const yearInput = document.querySelector('[data-year-input="application"]')

  if (titleNode) {
    titleNode.textContent = '교육활동 신청'
  }

  if (courseInput) {
    courseInput.value = ''
  }

  if (yearInput) {
    yearInput.value = '2026'
    const yearSelect = yearInput.closest('[data-custom-select]')
    const yearOption = yearSelect?.querySelector('.custom-select-option[data-value="2026"]')

    if (yearSelect && yearOption) {
      selectCustomOption(yearSelect, yearOption, { shouldClose: false })
    }
  }

  syncMenuButtons('application', state.application.selectedMenu)
  renderApplicationFilterActions()
  renderApplicationTable()
  syncApplicationDetailView()
  renderApplicationDetail(state.application.selectedMenu)
}

function getApplicationExpectedCostRaw(menu = state.application.selectedMenu) {
  return getApplicationDetailDraft(menu)?.expectedCost || ''
}

function getApplicationExpectedCostDisplay(menu = state.application.selectedMenu) {
  return formatCurrencyWithUnit(getApplicationExpectedCostRaw(menu))
}

function renderDetailFieldLabel(label, { srOnly = false } = {}) {
  return `<label class="detail-field-label${srOnly ? ' sr-only' : ''}">${label}</label>`
}

function appendRequiredIndicator(label = '') {
  return `${label}<span class="field-required-mark" aria-hidden="true">*</span>`
}

function renderApplicationDetailField(field) {
  const fieldClass = `detail-field${field.full ? ' is-full' : ''}`
  const helpMarkup = field.help ? `<p class="field-help">${field.help}</p>` : ''

  if (field.type === 'select') {
    return `
      <div class="${fieldClass}">
        ${renderDetailFieldLabel(field.required ? appendRequiredIndicator(field.label) : field.label)}
        ${renderSelectFieldMarkup(field.options, field.value)}
        ${helpMarkup}
      </div>
    `
  }

  if (field.type === 'textarea') {
    return `
      <div class="${fieldClass}">
        ${renderDetailFieldLabel(field.required ? appendRequiredIndicator(field.label) : field.label)}
        <label class="field">
          <textarea placeholder="${field.placeholder || ''}">${field.value || ''}</textarea>
        </label>
        ${helpMarkup}
      </div>
    `
  }

  if (field.type === 'daterange') {
    return `
      <div class="${fieldClass}">
        ${renderDetailFieldLabel(field.required ? appendRequiredIndicator(field.label) : field.label)}
        <div class="detail-input-row is-daterange">
          ${createCustomDateFieldMarkup({
            value: field.start || '',
            placeholder: '시작일',
            hiddenAttributes: `data-application-date-input="${field.label}" data-application-date-bound="start"`,
            ariaLabel: `${field.label} 시작일`,
          })}
          <span class="date-range-separator" aria-hidden="true">~</span>
          ${createCustomDateFieldMarkup({
            value: field.end || '',
            placeholder: '종료일',
            hiddenAttributes: `data-application-date-input="${field.label}" data-application-date-bound="end"`,
            ariaLabel: `${field.label} 종료일`,
          })}
        </div>
        ${helpMarkup}
      </div>
    `
  }

  if (field.type === 'inline') {
    const primaryValue =
      field.primaryType === 'number'
        ? formatCurrencyDisplay(getApplicationExpectedCostRaw())
        : field.primaryValue || ''
    const secondaryContent =
      field.secondaryType === 'readonly'
        ? `<span class="application-amount-suffix">${field.secondaryValue || ''}</span>`
        : `<label class="field"><input type="text" value="${field.secondaryValue || ''}" /></label>`

    return `
      <div class="${fieldClass}">
        ${renderDetailFieldLabel(field.required ? appendRequiredIndicator(field.label) : field.label)}
        <label class="field application-amount-field">
          <div class="application-amount-row">
            <input type="text" inputmode="${field.primaryType === 'number' ? 'numeric' : 'text'}" value="${primaryValue}" placeholder="${field.primaryPlaceholder || ''}"${field.primaryType === 'number' ? ' data-application-expected-cost-input' : ''} />
            ${secondaryContent}
          </div>
        </label>
        ${helpMarkup}
      </div>
    `
  }

  if (field.type === 'readonly') {
    return `
      <div class="${fieldClass}">
        ${renderDetailFieldLabel(field.required ? appendRequiredIndicator(field.label) : field.label)}
        <div class="field is-readonly" aria-readonly="true">
          <span>${field.value || ''}</span>
          <span class="field-readonly-state" aria-hidden="true">수정 불가</span>
        </div>
        ${helpMarkup}
      </div>
    `
  }

  return `
    <div class="${fieldClass}">
      ${renderDetailFieldLabel(field.required ? appendRequiredIndicator(field.label) : field.label)}
      <label class="field">
        <input type="text" value="${field.value || ''}" placeholder="${field.placeholder || ''}" />
      </label>
      ${helpMarkup}
    </div>
  `
}

function renderNoticeCards(notices = [], options = {}) {
  const leadMarkup = options.lead
    ? `<p class="notice-panel-lead">${options.lead}</p>`
    : ''

  return `
    ${leadMarkup}
    ${notices
      .map(
        (notice) => `
          <article class="notice-item-card${notice.tone ? ` is-${notice.tone}` : ''}">
            <div class="notice-item-head">
              <span class="icon-box small ${notice.tone === 'warning' ? 'text-rose' : ''}" data-icon="${notice.icon || 'file'}"></span>
              <p class="notice-item-title">${notice.title}</p>
            </div>
            ${
              Array.isArray(notice.items) && notice.items.length
                ? `
                  <ul class="notice-item-bullets">
                    ${notice.items.map((item) => `<li>${item}</li>`).join('')}
                  </ul>
                `
                : ''
            }
            ${
              notice.emphasis
                ? `<p class="notice-emphasis">${notice.emphasis}</p>`
                : ''
            }
            ${
              Array.isArray(notice.groups) && notice.groups.length
                ? `
                  <div class="notice-group-list">
                    ${notice.groups
                      .map(
                        (group) => `
                          <div class="notice-group-block">
                            <p class="notice-group-title">${group.title}</p>
                            <ul class="notice-item-bullets is-compact">
                              ${(group.items || []).map((item) => `<li>${item}</li>`).join('')}
                            </ul>
                          </div>
                        `,
                      )
                      .join('')}
                  </div>
                `
                : ''
            }
            ${
              notice.examples
                ? `
                  <div class="notice-example-list">
                    ${notice.examples
                      .map(
                        (example) => `
                          <div class="notice-example-item is-${example.tone}">
                            <span>${example.text}</span>
                          </div>
                        `,
                      )
                      .join('')}
                  </div>
                `
                : ''
            }
          </article>
        `,
      )
      .join('')}
  `
}

function renderReportNoticeCards(notices = [], options = {}) {
  const getNoticeTitleIcon = (title) => {
    if (title === '첨부 파일 안내') {
      return `
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M6 4.5v6.25a2.25 2.25 0 0 0 4.5 0v-7a3.25 3.25 0 0 0-6.5 0v7.5a4.25 4.25 0 0 0 8.5 0V5.5" />
        </svg>
      `
    }

    if (title === '첨부 위치 안내') {
      return `
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 13.25s3.25-3.2 3.25-6A3.25 3.25 0 1 0 4.75 7.3c0 2.76 3.25 5.95 3.25 5.95Z" />
          <circle cx="8" cy="7.25" r="1.2" />
        </svg>
      `
    }

    return ''
  }

  const leadMarkup = options.lead
    ? `
        <div class="report-notice-lead">
          <p>${options.lead}</p>
        </div>
      `
    : ''

  return `
    ${leadMarkup}
    ${notices
      .map((notice) => {
        const titleIcon = getNoticeTitleIcon(notice.title)
        const groupMarkup = Array.isArray(notice.groups) && notice.groups.length
          ? `
              <div class="report-notice-groups${notice.title === '첨부 위치 안내' ? ' is-split' : ''}">
                ${notice.groups
                  .map(
                    (group) => `
                      <div class="report-notice-group">
                        <p class="report-notice-group-title">${group.title}</p>
                        <ul class="report-notice-bullets is-subtle">
                          ${(group.items || []).map((item) => `<li>${item}</li>`).join('')}
                        </ul>
                      </div>
                    `,
                  )
                  .join('')}
              </div>
            `
          : ''

        return `
          <article class="report-notice-card${notice.tone ? ` is-${notice.tone}` : ''}">
            <div class="report-notice-head">
              <p class="report-notice-title">${titleIcon ? `<span class="report-notice-title-icon" aria-hidden="true">${titleIcon}</span>` : ''}<span>${notice.title}</span></p>
            </div>
            ${
              Array.isArray(notice.items) && notice.items.length
                ? `
                    <ul class="report-notice-bullets">
                      ${notice.items.map((item) => `<li>${item}</li>`).join('')}
                    </ul>
                  `
                : ''
            }
            ${groupMarkup}
          </article>
        `
      })
      .join('')}
  `
}

function renderApplicationDetail(menu = state.application.selectedMenu) {
  closeDatePicker()
  const config = applicationDetailConfigs[menu]

  if (!config) {
    return
  }

  const titleNode = document.querySelector('[data-application-detail-title]')
  const summaryNode = document.querySelector('[data-application-budget-summary]')
  const noticeNode = document.querySelector('[data-application-notices]')

  if (titleNode) {
    titleNode.textContent = config.title
  }

  const selectedRow = getApplicationSelectedRow(menu)
  const detailFields = structuredClone(config.fields)
  const detailDraft = getApplicationDetailDraft(menu)

  if (selectedRow && menu === '사외교육 신청') {
    detailFields.basic = detailFields.basic.map((field) => {
      if (field.label === '제목') {
        return { ...field, value: selectedRow.courseName }
      }

      if (field.label === '장소') {
        return { ...field, value: selectedRow.place }
      }

      if (field.label === '교육시간') {
        return { ...field, value: selectedRow.hours }
      }

      if (field.label === '기간') {
        const [start, end] = String(selectedRow.period || '').split(' - ')
        return {
          ...field,
          start: start?.replaceAll('.', '-') || field.start,
          end: end?.replaceAll('.', '-') || field.end,
        }
      }

      return field
    })
  }

  detailFields.basic = detailFields.basic.map((field) => {
    if (field.type !== 'daterange') {
      return field
    }

    const savedRange = detailDraft?.dateRanges?.[field.label]

    if (!savedRange) {
      return field
    }

    return {
      ...field,
      start: savedRange.start || field.start,
      end: savedRange.end || field.end,
    }
  })

  if (summaryNode) {
    summaryNode.innerHTML = config.budgetSummary
      .map(
        (item) => `
          <article class="detail-summary-card${item.tone ? ` is-${item.tone}` : ''}">
            <p class="detail-summary-label">${item.label}</p>
            <p class="detail-summary-value"${item.label === '예상 비용' ? ' data-application-expected-cost-summary' : ''}>${item.label === '예상 비용' ? getApplicationExpectedCostDisplay(menu) : item.value}</p>
            <p class="detail-summary-caption">${item.caption}</p>
          </article>
        `,
      )
      .join('')
  }

  ;['basic', 'cost', 'extra'].forEach((sectionKey) => {
    const target = document.querySelector(`[data-application-detail-fields="${sectionKey}"]`)

    if (target) {
      target.innerHTML = (detailFields[sectionKey] || [])
        .map((field) => renderApplicationDetailField(field))
        .join('')
    }
  })

  if (noticeNode) {
    noticeNode.innerHTML = renderNoticeCards(config.notices)
  }

  renderIcons()
  bindCustomSelects()
}

function syncApplicationDetailView() {
  const listView = document.querySelector('[data-application-view="list"]')
  const detailView = document.querySelector('[data-application-view="detail"]')

  if (!listView || !detailView) {
    return
  }

  listView.classList.toggle('is-hidden', state.application.isDetailOpen)
  detailView.classList.toggle('is-hidden', !state.application.isDetailOpen)
}

function openApplicationDetail(menu = state.application.selectedMenu) {
  state.application.selectedMenu = menu
  state.application.isDetailOpen = true
  state.application.selectedRowId = null
  resetApplicationDetailDraft(menu)
  renderApplicationDetail(menu)
  syncMenuButtons('application', menu)
  syncApplicationDetailView()
}

function closeApplicationDetail({ resetDraft = false } = {}) {
  if (resetDraft) {
    resetApplicationDetailDraft(state.application.selectedMenu)
  }

  state.application.isDetailOpen = false
  state.application.selectedRowId = null
  syncApplicationDetailView()
}

function getReportRows(menu = state.report.selectedMenu) {
  return reportRowsByMenu[menu] || []
}

function getReportSelectedRow(menu = state.report.selectedMenu, rowId = state.report.selectedRowId) {
  return getReportRows(menu).find((row) => row.id === rowId) || null
}

function renderReportDetailField(field, sectionKey = '') {
  const fieldClass = `detail-field${field.full ? ' is-full' : ''}`

  if (field.type === 'radio') {
    return `
      <div class="${fieldClass}">
        ${renderDetailFieldLabel(field.label)}
        <div class="report-evaluation-group">
          ${field.options
            .map(
              (option) => `
                <label class="report-evaluation-option">
                  <input type="radio" name="${field.name}" ${option.label === field.value ? 'checked' : ''} />
                  <span class="report-evaluation-emoji" aria-hidden="true">${option.emoji}</span>
                  <span class="report-evaluation-label">${option.label}</span>
                </label>
              `,
            )
            .join('')}
        </div>
      </div>
    `
  }

  const fieldSelector =
    sectionKey && field.key
      ? ` data-report-field="${field.key}" data-report-section="${sectionKey}"`
      : ''

  if (field.type === 'text') {
    return `
      <div class="${fieldClass}">
        ${renderDetailFieldLabel(field.label)}
        <label class="field">
          <input type="text" value="${field.value || ''}" placeholder="${field.placeholder || ''}"${fieldSelector}${field.key === 'accountNumber' ? ' inputmode="numeric"' : ''} />
        </label>
      </div>
    `
  }

  return renderApplicationDetailField(field)
}

function renderReportUploadList(items = []) {
  const target = document.querySelector('[data-report-upload-list]')

  if (!target) {
    return
  }

  if (!items.length) {
    target.innerHTML = `
      <div class="field-help">첨부된 파일이 없습니다.</div>
    `
    return
  }

  target.innerHTML = items
    .map(
      (item) => `
        <div class="report-upload-item">
          <div class="report-upload-meta">
            <span class="icon-box small" data-icon="file"></span>
            <span class="report-upload-name">${item.name}</span>
            <span class="report-upload-size">${item.size}</span>
          </div>
          <button type="button" class="danger-secondary-button report-upload-remove" data-report-upload-remove="${item.id}">삭제</button>
        </div>
      `,
    )
    .join('')

  renderIcons()
}

function syncReportCostDraft() {
  if (!state.report.detailDraft) {
    return
  }

  const requestAmount = sanitizeNumericValue(state.report.detailDraft.requestAmount || '0')
  state.report.detailDraft.requestAmount = requestAmount

  const requestCostCard = state.report.detailDraft.cost?.find((item) => item.label === '신청금액')
  const paymentCostCard = state.report.detailDraft.cost?.find((item) => item.label === '지급금액')

  if (requestCostCard) {
    requestCostCard.value = formatCurrencyWithUnit(requestAmount)
  }

  if (paymentCostCard) {
    paymentCostCard.value = formatCurrencyWithUnit(requestAmount)
  }
}

function renderReportCostSummary() {
  const costNode = document.querySelector('[data-report-cost-summary]')

  if (!costNode || !state.report.detailDraft) {
    return
  }

  costNode.innerHTML = (state.report.detailDraft.cost || [])
    .map(
      (item) => `
        <article class="detail-summary-card${item.tone ? ` is-${item.tone}` : ''}">
          <p class="detail-summary-label">${item.label}</p>
          <p class="detail-summary-value">${item.value}</p>
          <p class="detail-summary-caption">${item.caption}</p>
        </article>
      `,
    )
    .join('')
}

function renderReportDetail() {
  closeDatePicker()
  const menu = state.report.selectedMenu
  const config = reportDetailConfigs[menu]
  const row = getReportSelectedRow(menu)

  if (!config || !row) {
    return
  }

  if (!state.report.detailDraft || state.report.detailDraft.id !== row.id) {
    state.report.detailDraft = {
      id: row.id,
      ...config.rowToDetail(row),
    }
  }

  const draft = state.report.detailDraft
  const titleNode = document.querySelector('[data-report-detail-title]')
  const requestAmountNode = document.querySelector('[data-report-request-amount-field]')
  const costNode = document.querySelector('[data-report-cost-summary]')
  const noticeNode = document.querySelector('[data-report-notices]')

  if (titleNode) {
    titleNode.textContent = menu
  }

  ;['basic', 'education', 'account'].forEach((sectionKey) => {
    const target = document.querySelector(`[data-report-detail-fields="${sectionKey}"]`)

    if (target) {
      target.classList.toggle(
        'is-report-education-layout',
        menu === '교육활동 결과보고' && sectionKey === 'education',
      )
      target.innerHTML = (draft[sectionKey] || [])
        .map((field) => renderReportDetailField(field, sectionKey))
        .join('')
    }
  })

  syncReportCostDraft()

  if (requestAmountNode) {
    requestAmountNode.innerHTML = `
      ${renderDetailFieldLabel('신청금액', { srOnly: true })}
      <label class="field report-request-amount-field">
        <div class="report-request-amount-row">
          <input
            type="text"
            inputmode="numeric"
            value="${formatCurrencyDisplay(draft.requestAmount || '0')}"
            placeholder="금액 입력"
            data-report-request-amount-input
          />
          <span class="report-request-amount-suffix">원</span>
        </div>
      </label>
    `
  }

  renderReportCostSummary()

  renderReportUploadList(draft.uploads || [])

  if (noticeNode) {
    noticeNode.innerHTML = renderReportNoticeCards(config.notices, {
      lead: config.noticeLead,
    })
  }

  renderIcons()
  bindCustomSelects()
}

function syncReportDetailView() {
  const listView = document.querySelector('[data-report-view="list"]')
  const detailView = document.querySelector('[data-report-view="detail"]')

  if (!listView || !detailView) {
    return
  }

  listView.classList.toggle('is-hidden', state.report.isDetailOpen)
  detailView.classList.toggle('is-hidden', !state.report.isDetailOpen)
}

function openReportDetail(rowId) {
  state.report.selectedRowId = rowId
  state.report.isDetailOpen = true
  state.report.detailDraft = null
  renderReportDetail()
  syncReportDetailView()
}

function closeReportDetail() {
  state.report.isDetailOpen = false
  state.report.selectedRowId = null
  state.report.detailDraft = null
  syncReportDetailView()
}

function openConfirmModal(onConfirm) {
  const modal = document.querySelector('[data-confirm-modal]')
  const submitButton = modal?.querySelector('[data-confirm-submit]')

  if (!modal || !submitButton) {
    return
  }

  confirmCancelHandler = onConfirm
  modal.classList.remove('is-hidden')
  modal.setAttribute('aria-hidden', 'false')
  submitButton.focus()
}

function closeConfirmModal() {
  const modal = document.querySelector('[data-confirm-modal]')

  if (!modal) {
    return
  }

  confirmCancelHandler = null
  modal.classList.add('is-hidden')
  modal.setAttribute('aria-hidden', 'true')
}

function bindConfirmModalEvents() {
  const modal = document.querySelector('[data-confirm-modal]')

  if (!modal || modal.dataset.bound === 'true') {
    return
  }

  modal.dataset.bound = 'true'

  modal.addEventListener('click', (event) => {
    if (event.target.closest('[data-confirm-close]')) {
      closeConfirmModal()
      return
    }

    if (event.target.closest('[data-confirm-submit]')) {
      const handler = confirmCancelHandler
      closeConfirmModal()
      handler?.()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('is-hidden')) {
      closeConfirmModal()
    }
  })
}

function validateReportDetailDraft() {
  const accountFields = state.report.detailDraft?.account || []
  const educationFields = state.report.detailDraft?.education || []
  const hasValidAccountFields = accountFields.every((field) => String(field.value || '').trim() !== '')
  const hasEducationPlace = educationFields
    .filter((field) => field.key === 'educationPlace')
    .every((field) => String(field.value || '').trim() !== '')

  return hasValidAccountFields && hasEducationPlace
}

function resetReportView() {
  state.report.selectedMenu = '교육활동 결과보고'
  state.report.isDetailOpen = false
  state.report.selectedRowId = null
  state.report.detailDraft = null
  state.report.courseName = ''
  state.report.year = '2026'
  state.report.appliedFilters = {
    courseName: '',
    year: '2026',
  }

  const titleNode = document.querySelector('[data-filter-title="report"]')
  const courseInput = document.querySelector('[data-course-input="report"]')
  const yearInput = document.querySelector('[data-year-input="report"]')

  if (titleNode) {
    titleNode.textContent = '교육활동 결과보고'
  }

  if (courseInput) {
    courseInput.value = ''
  }

  if (yearInput) {
    yearInput.value = '2026'
    const yearSelect = yearInput.closest('[data-custom-select]')
    const yearOption = yearSelect?.querySelector('.custom-select-option[data-value="2026"]')

    if (yearSelect && yearOption) {
      selectCustomOption(yearSelect, yearOption, { shouldClose: false })
    }
  }

  syncMenuButtons('report', state.report.selectedMenu)
  renderReportTable()
  syncReportDetailView()
}

function renderReportTable() {
  const target = document.querySelector('[data-table-body="report"]')
  if (!target) {
    return
  }

  const { selectedMenu, appliedFilters } = state.report
  const rows = (reportRowsByMenu[selectedMenu] || []).filter((row) => {
    const matchesYear = row.year === appliedFilters.year
    const matchesCourse = row.courseName
      .toLowerCase()
      .includes(appliedFilters.courseName.toLowerCase())
    return matchesYear && matchesCourse
  })

  if (!rows.length) {
    target.innerHTML = renderEmptyRow(7, appliedFilters.year, selectedMenu)
    renderIcons()
    return
  }

  target.innerHTML = rows
    .map(
      (row) => `
        <tr class="report-row" data-report-row="${row.id}">
          <td>${row.year}</td>
          <td>${row.courseName}</td>
          <td>${row.period}</td>
          <td>${row.hours}</td>
          <td>${row.place}</td>
          <td>${row.approvalStatus}</td>
          <td>${row.completionStatus}</td>
        </tr>
      `,
    )
    .join('')
}

function filterEducationStatusRows() {
  const { selectedMenu, appliedFilters } = state.educationStatus
  const rows = educationStatusRowsByMenu[selectedMenu] || []

  return rows.filter((row) => {
    const matchesYear = row.year === appliedFilters.year
    const matchesCompletion =
      appliedFilters.completionStatus === '전체' ||
      row.completionStatus === appliedFilters.completionStatus
    const matchesKeyword = row.courseName
      .toLowerCase()
      .includes(appliedFilters.keyword.toLowerCase())

    return matchesYear && matchesCompletion && matchesKeyword
  })
}

function renderEducationStatusTable() {
  const target = document.querySelector('[data-table-body="education-status"]')
  if (!target) {
    return
  }

  const rows = filterEducationStatusRows()

  if (!rows.length) {
    target.innerHTML = renderEducationStatusEmptyRow()
    renderIcons()
    return
  }

      target.innerHTML = rows
    .map(
      (row) => `
        <tr>
          <td>${row.year}</td>
          <td>${row.courseName}</td>
          <td>${row.period}</td>
          <td>${row.hours}</td>
          <td>${row.credit}</td>
          <td>${row.completionStatus}</td>
        </tr>
      `,
    )
    .join('')
}

function renderAdminBaseContent() {
  closeDatePicker()
  const titleNode = document.querySelector('[data-filter-title="adminBase"]')
  const config = getAdminBaseConfig()

  if (titleNode) {
    titleNode.textContent = config.title
  }

  renderAdminBaseHeaderActions()

  if (state.adminBase.selectedMenu === defaultAdminBaseMenu) {
    renderAdminBaseCreditCostPage()
  } else if (state.adminBase.selectedMenu === '보고서 기한 연장') {
    renderAdminDeadlinePage()
  } else {
    renderAdminBasePlaceholderPage(config)
  }

  syncMenuButtons('adminBase', state.adminBase.selectedMenu)
  renderIcons()

  if (state.adminBase.selectedMenu === '보고서 기한 연장') {
    const focusRowId = state.adminBase.deadlinePendingFocusRowId || state.adminBase.deadlineValidationRowId
    state.adminBase.deadlinePendingFocusRowId = ''
    focusAdminDeadlineDateInput(focusRowId)
  }
}

function syncMenuButtons(group, selectedMenu) {
  document
    .querySelectorAll(`.side-menu-button[data-menu-group="${group}"]`)
    .forEach((button) => button.classList.toggle('is-active', button.dataset.menu === selectedMenu))
}

function initializeFilterViews() {
  document.querySelectorAll('.side-menu-button').forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.menuGroup
      state[group].selectedMenu = button.dataset.menu
      const titleNode = document.querySelector(`[data-filter-title="${group}"]`)

      if (titleNode) {
        titleNode.textContent = button.dataset.menu
      }

      syncMenuButtons(group, button.dataset.menu)

      if (group === 'application') {
        closeApplicationDetail({ resetDraft: true })
        renderApplicationFilterActions()
        renderApplicationTable()
      } else if (group === 'report') {
        closeReportDetail()
        renderReportTable()
      } else if (group === 'adminBase') {
        resetAdminMenuState(button.dataset.menu)
        renderAdminBaseContent()

        if (state.currentView === '기초정보') {
          updateBrowserPath(getAdminBaseConfig(button.dataset.menu).route)
        }
      }
    })
  })

  document.querySelectorAll('[data-course-input]').forEach((input) => {
    input.addEventListener('input', () => {
      state[input.dataset.courseInput].courseName = input.value
    })
  })

  document.querySelectorAll('[data-year-input]').forEach((field) => {
    field.addEventListener('change', () => {
      state[field.dataset.yearInput].year = field.value
    })
  })

  document.querySelectorAll('[data-search-button]').forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.searchButton
      if (group === 'application' || group === 'report') {
        state[group].appliedFilters = {
          courseName: state[group].courseName,
          year: state[group].year,
        }
      }

      if (group === 'application') {
        renderApplicationTable()
      } else if (group === 'report') {
        renderReportTable()
      }
    })
  })

  renderApplicationTable()
  renderReportTable()
  renderAdminBaseContent()
}

function bindApplicationDetailEvents() {
  const filterActions = document.querySelector('[data-application-filter-actions]')

  if (filterActions && filterActions.dataset.bound !== 'true') {
    filterActions.dataset.bound = 'true'

    filterActions.addEventListener('click', (event) => {
      const writeButton = event.target.closest('[data-application-write-button]')

      if (writeButton) {
        openApplicationDetail()
      }
    })
  }

  document.querySelectorAll('[data-application-detail-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.applicationDetailAction

      if (action === 'back' || action === 'cancel' || action === 'save') {
        closeApplicationDetail({ resetDraft: true })
      }
    })
  })

  const detailView = document.querySelector('[data-application-view="detail"]')

  const applicationTableBody = document.querySelector('[data-table-body="application"]')

  if (applicationTableBody && applicationTableBody.dataset.bound !== 'true') {
    applicationTableBody.dataset.bound = 'true'

    applicationTableBody.addEventListener('click', (event) => {
      const row = event.target.closest('[data-application-row]')

      if (!row || state.application.selectedMenu !== '사외교육 신청') {
        return
      }

      state.application.selectedRowId = row.dataset.applicationRow
      openApplicationDetail('사외교육 신청')
    })
  }

  if (detailView && detailView.dataset.bound !== 'true') {
    detailView.dataset.bound = 'true'

    detailView.addEventListener('change', (event) => {
      const dateInput = event.target.closest('[data-application-date-input]')

      if (!dateInput) {
        return
      }

      const menu = state.application.selectedMenu
      const draft = getApplicationDetailDraft(menu)

      if (!draft) {
        return
      }

      const rangeLabel = dateInput.dataset.applicationDateInput
      const bound = dateInput.dataset.applicationDateBound

      draft.dateRanges[rangeLabel] = {
        ...(draft.dateRanges[rangeLabel] || {}),
        [bound]: dateInput.value,
      }
    })

    detailView.addEventListener('input', (event) => {
      const input = event.target.closest('[data-application-expected-cost-input]')

      if (!input) {
        return
      }

      const rawValue = String(input.value || '').replace(/[^\d]/g, '')
      const safeValue = rawValue.replace(/^0+(?=\d)/, '')
      const menu = state.application.selectedMenu
      const draft = getApplicationDetailDraft(menu)

      if (!draft) {
        return
      }

      draft.expectedCost = safeValue
      input.value = formatCurrencyDisplay(safeValue)

      const summaryValue = detailView.querySelector('[data-application-expected-cost-summary]')

      if (summaryValue) {
        summaryValue.textContent = formatCurrencyWithUnit(safeValue)
      }
    })
  }

  syncApplicationDetailView()
  renderApplicationFilterActions()
  renderApplicationDetail(state.application.selectedMenu)
}

function bindReportDetailEvents() {
  const reportTableBody = document.querySelector('[data-table-body="report"]')

  if (reportTableBody && reportTableBody.dataset.bound !== 'true') {
    reportTableBody.dataset.bound = 'true'

    reportTableBody.addEventListener('click', (event) => {
      const row = event.target.closest('[data-report-row]')

      if (!row) {
        return
      }

      openReportDetail(row.dataset.reportRow)
    })
  }

  document.querySelectorAll('[data-report-detail-action]').forEach((button) => {
    if (button.dataset.bound === 'true') {
      return
    }

    button.dataset.bound = 'true'
    button.addEventListener('click', () => {
      if (
        button.dataset.reportDetailAction === 'save' &&
        !validateReportDetailDraft()
      ) {
        window.alert('교육장소, 은행, 계좌번호, 예금주를 모두 입력해주세요.')
        return
      }

      if (button.dataset.reportDetailAction === 'destructive-cancel') {
        openConfirmModal(() => {
          closeReportDetail()
          renderReportTable()
        })
        return
      }

      closeReportDetail()
      renderReportTable()
    })
  })

  const detailView = document.querySelector('[data-report-view="detail"]')

  if (detailView && detailView.dataset.uploadBound !== 'true') {
    detailView.dataset.uploadBound = 'true'

    detailView.addEventListener('click', (event) => {
      const removeButton = event.target.closest('[data-report-upload-remove]')

      if (!removeButton || !state.report.detailDraft) {
        return
      }

      state.report.detailDraft.uploads =
        (state.report.detailDraft.uploads || []).filter(
          (item) => item.id !== removeButton.dataset.reportUploadRemove,
        )
      renderReportUploadList(state.report.detailDraft.uploads)
    })

    detailView.addEventListener('change', (event) => {
      const input = event.target.closest('[data-report-upload-input]')

      if (!input || !state.report.detailDraft) {
        return
      }

      const files = Array.from(input.files || []).map((file, index) => ({
        id: `report-upload-${Date.now()}-${index}`,
        name: file.name,
        size: `${Math.max(1, Math.round(file.size / 1024))}KB`,
      }))

      state.report.detailDraft.uploads = [...(state.report.detailDraft.uploads || []), ...files]
      renderReportUploadList(state.report.detailDraft.uploads)
      input.value = ''
    })

    detailView.addEventListener('input', (event) => {
      const amountInput = event.target.closest('[data-report-request-amount-input]')
      const input = event.target.closest('[data-report-field]')

      if (amountInput && state.report.detailDraft) {
        const sanitizedValue = sanitizeNumericValue(amountInput.value)
        const safeValue = sanitizedValue.replace(/^0+(?=\d)/, '')

        state.report.detailDraft.requestAmount = safeValue || '0'
        syncReportCostDraft()
        amountInput.value = formatCurrencyDisplay(state.report.detailDraft.requestAmount)
        renderReportCostSummary()
        return
      }

      if (!input || !state.report.detailDraft) {
        return
      }

      const sectionKey = input.dataset.reportSection
      const fieldKey = input.dataset.reportField
      const sectionFields = state.report.detailDraft[sectionKey]

      if (!Array.isArray(sectionFields)) {
        return
      }

      const targetField = sectionFields.find((field) => field.key === fieldKey)

      if (!targetField) {
        return
      }

      const nextValue =
        fieldKey === 'accountNumber'
          ? input.value.replace(/[^\d-]/g, '')
          : input.value

      if (input.value !== nextValue) {
        input.value = nextValue
      }

      targetField.value = nextValue
    })
  }

  syncReportDetailView()
}

function bindEducationStatusEvents() {
  document
    .querySelectorAll('.side-menu-button[data-menu-group="educationStatus"]')
    .forEach((button) => {
      button.addEventListener('click', () => {
        state.educationStatus.selectedMenu = button.dataset.menu
        document.querySelector('[data-filter-title="educationStatus"]').textContent = button.dataset.menu
        syncMenuButtons('educationStatus', button.dataset.menu)
        renderEducationStatusTable()
      })
    })

  document.querySelectorAll('[data-education-filter]').forEach((field) => {
    const eventName =
      field.type === 'hidden' ? 'change' : field.tagName === 'SELECT' ? 'change' : 'input'

    field.addEventListener(eventName, () => {
      state.educationStatus[field.dataset.educationFilter] = field.value
    })
  })

  const searchButton = document.querySelector('[data-search-button="educationStatus"]')

  if (searchButton) {
    searchButton.addEventListener('click', () => {
      state.educationStatus.appliedFilters = {
        year: state.educationStatus.year,
        completionStatus: state.educationStatus.completionStatus,
        keyword: state.educationStatus.keyword,
      }
      renderEducationStatusTable()
    })
  }

  syncMenuButtons('educationStatus', state.educationStatus.selectedMenu)
  renderEducationStatusTable()
}

function bindAdminBaseEvents() {
  const contentNode = document.querySelector('[data-admin-base-content]')
  const headerActionsNode = document.querySelector('[data-admin-base-header-actions]')

  if (!contentNode || contentNode.dataset.bound === 'true') {
    return
  }

  contentNode.dataset.bound = 'true'

  contentNode.addEventListener('click', (event) => {
    const tabButton = event.target.closest('[data-admin-base-tab]')
    const actionButton = event.target.closest('[data-admin-base-action]')
    const selectAll = event.target.closest('[data-admin-base-select-all]')
    const deadlineActionButton = event.target.closest('[data-admin-deadline-action]')

    if (tabButton) {
      state.adminBase.selectedEmployeeTab = tabButton.dataset.adminBaseTab
      state.adminBase.selectedRowIds = []
      renderAdminBaseContent()
      return
    }

    if (selectAll) {
      const visibleRowIds = filterAdminBaseRows().map((row) => row.id)
      const allVisibleSelected =
        Boolean(visibleRowIds.length) &&
        visibleRowIds.every((rowId) => state.adminBase.selectedRowIds.includes(rowId))

      state.adminBase.selectedRowIds = allVisibleSelected
        ? state.adminBase.selectedRowIds.filter((id) => !visibleRowIds.includes(id))
        : [...new Set([...state.adminBase.selectedRowIds, ...visibleRowIds])]
      renderAdminBaseContent()
      return
    }

    if (!actionButton) {
      if (!deadlineActionButton) {
        return
      }

      if (deadlineActionButton.dataset.adminDeadlineAction === 'search') {
        state.adminBase.appliedDeadlineFilters = {
          ...state.adminBase.deadlineFilters,
        }
        renderAdminBaseContent()
        return
      }

      if (deadlineActionButton.dataset.adminDeadlineAction === 'save') {
        if (!validateAdminDeadlineRows()) {
          renderAdminBaseContent()
          window.alert('연장 상태인 항목은 연장 날짜를 선택해야 합니다.')
          return
        }

        state.adminBase.deadlineInitialRows = JSON.parse(
          JSON.stringify(state.adminBase.deadlineRows),
        )
        state.adminBase.deadlineValidationRowId = ''
        syncAdminDeadlineDirtyState()
        window.alert('변경사항이 저장되었습니다.')
        renderAdminBaseContent()
      }

      return
    }

    if (actionButton.dataset.adminBaseAction === 'search') {
      executeAdminBaseSearch()
      return
    }

    if (actionButton.dataset.adminBaseAction === 'apply-settings') {
      if (!applyAdminBaseDraftSettingsToRows()) {
        window.alert('적용할 행을 먼저 선택해주세요.')
        return
      }
      renderAdminBaseContent()
      return
    }

    if (actionButton.dataset.adminBaseAction === 'delete-selected') {
      if (!state.adminBase.selectedRowIds.length) {
        window.alert('삭제할 대상을 먼저 선택해주세요.')
        return
      }

      removeSelectedAdminBaseRows()
      renderAdminBaseContent()
      return
    }

    if (actionButton.dataset.adminBaseAction === 'save') {
      state.adminBase.initialRows = JSON.parse(JSON.stringify(state.adminBase.rows))
      state.adminBase.selectedRowIds = []
      state.adminBase.hasPendingSettingChanges = false
      window.alert('변경사항이 저장되었습니다.')
      renderAdminBaseContent()
    }
  })

  contentNode.addEventListener('change', (event) => {
    const rowCheckbox = event.target.closest('[data-admin-base-row-select]')
    const hiddenInput = event.target.closest('[data-admin-base-input]')
    const deadlineToggle = event.target.closest('[data-admin-deadline-toggle]')
    const deadlineDateInput = event.target.closest('[data-admin-deadline-date]')

    if (rowCheckbox) {
      const rowId = rowCheckbox.dataset.adminBaseRowSelect

      state.adminBase.selectedRowIds = rowCheckbox.checked
        ? [...new Set([...state.adminBase.selectedRowIds, rowId])]
        : state.adminBase.selectedRowIds.filter((id) => id !== rowId)

      renderAdminBaseContent()
      return
    }

    if (deadlineToggle) {
      toggleAdminDeadlineRow(
        deadlineToggle.dataset.adminDeadlineToggle,
        deadlineToggle.checked,
      )
      renderAdminBaseContent()
      return
    }

    if (deadlineDateInput) {
      updateAdminDeadlineDate(deadlineDateInput.dataset.adminDeadlineDate, deadlineDateInput.value)
      renderAdminBaseContent()
      return
    }

    if (!hiddenInput) {
      return
    }

    const inputKey = hiddenInput.dataset.adminBaseInput
    const nextValue = hiddenInput.value.replace('년', '')

    if (inputKey === 'year') {
      state.adminBase.year = nextValue
      renderAdminBaseHeaderActions()
      return
    }

    if (inputKey === 'deadlineYear' || inputKey === 'deadlineHeaderYear') {
      state.adminBase.deadlineFilters.year = nextValue
      renderAdminBaseHeaderActions()
      return
    }

    if (inputKey === 'deadlineDepartment') {
      state.adminBase.deadlineFilters.department = hiddenInput.value
    }
  })

  contentNode.addEventListener('input', (event) => {
    const filterInput = event.target.closest('[data-admin-base-input]')
    const settingInput = event.target.closest('[data-admin-base-setting]')
    const cellInput = event.target.closest('[data-admin-base-cell-input]')
    const deadlineInput = event.target.closest('[data-admin-deadline-input]')

    if (filterInput) {
      state.adminBase[filterInput.dataset.adminBaseInput] = filterInput.value
      return
    }

    if (deadlineInput) {
      state.adminBase.deadlineFilters[deadlineInput.dataset.adminDeadlineInput] =
        deadlineInput.value
      return
    }

    if (settingInput) {
      const key = settingInput.dataset.adminBaseSetting
      const sanitizedValue = sanitizeNumericValue(settingInput.value)

      state.adminBase.draftSettings[key] = sanitizedValue
      state.adminBase.hasPendingSettingChanges = true
      return
    }

    if (cellInput) {
      const rowId = cellInput.dataset.adminBaseCellInput
      const field = cellInput.dataset.field
      const sanitizedValue = sanitizeNumericValue(cellInput.value)

      updateAdminBaseRowValue(rowId, field, sanitizedValue)
      refreshAdminBaseRowDerivedUI(rowId)
    }
  })

  contentNode.addEventListener('focusin', (event) => {
    const numberInput = event.target.closest('[data-admin-base-setting], [data-admin-base-cell-input]')

    if (!numberInput) {
      return
    }

    numberInput.value = sanitizeNumericValue(numberInput.value)
  })

  contentNode.addEventListener('focusout', (event) => {
    const numberInput = event.target.closest('[data-admin-base-setting], [data-admin-base-cell-input]')

    if (!numberInput) {
      return
    }

    numberInput.value = formatAdminCurrency(numberInput.value)
  })

  contentNode.addEventListener('keydown', (event) => {
    const keywordInput = event.target.closest('[data-admin-base-input="keyword"]')

    if (!keywordInput || event.key !== 'Enter') {
      return
    }

    event.preventDefault()
    executeAdminBaseSearch()
  })

  if (headerActionsNode && headerActionsNode.dataset.bound !== 'true') {
    headerActionsNode.dataset.bound = 'true'

    headerActionsNode.addEventListener('change', (event) => {
      const hiddenInput = event.target.closest('[data-admin-base-input]')

      if (!hiddenInput) {
        return
      }

      if (hiddenInput.dataset.adminBaseInput === 'year') {
        state.adminBase.year = hiddenInput.value.replace('년', '')
      }

      if (hiddenInput.dataset.adminBaseInput === 'deadlineHeaderYear') {
        state.adminBase.deadlineFilters.year = hiddenInput.value.replace('년', '')
      }
    })
  }
}

function bindWindowEvents() {
  window.addEventListener('resize', () => {
    closeDatePicker()
    window.requestAnimationFrame(updateActiveBar)
    window.requestAnimationFrame(() => updateAllStatusTabIndicators({ animate: false }))
    window.requestAnimationFrame(updateStatusListHeights)
  })

  window.addEventListener('load', () => {
    updateActiveBar()
    updateAllStatusTabIndicators({ animate: false })
    updateStatusListHeights()
  })

  window.addEventListener('popstate', () => {
    closeDatePicker()
    const routeState = resolveRouteState()
    applyRouteState(routeState)
    showView(state.currentView)
    setActiveTab(state.currentView)
    renderAdminBaseContent()
  })

  if ('ResizeObserver' in window && elements.topNav) {
    const navResizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(updateActiveBar)
    })

    navResizeObserver.observe(elements.topNav)
  }

  window.addEventListener(
    'scroll',
    () => {
      if (state.datePicker.isOpen) {
        closeDatePicker()
      }
    },
    true,
  )
}

function initializeApp() {
  if (state.hasInitialized) {
    return
  }

  state.hasInitialized = true
  applyRoleAccessControl()
  renderIcons()
  bindCustomSelects()
  bindDatePickerEvents()
  bindTabEvents()
  bindWindowEvents()
  initializeStatusCards()
  initializeFilterViews()
  bindConfirmModalEvents()
  bindApplicationDetailEvents()
  bindReportDetailEvents()
  bindEducationStatusEvents()
  bindAdminBaseEvents()
  applyRouteState(resolveRouteState(), { replaceHistory: true })
  showView(state.currentView)

  if (state.currentView === '홈') {
    state.homeAnimationToken += 1
  }

  elements.topTabs.forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.nav === state.currentView)
  })
  initializeActiveBar()

  if (state.currentView === '홈') {
    window.setTimeout(() => {
      if (state.currentView !== '홈') {
        return
      }

      replayHomeEntryAnimation(state.homeAnimationToken)
    }, INITIAL_ENTRY_BUFFER_MS)
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp, { once: true })
} else {
  initializeApp()
}
