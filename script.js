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
      { title: '조직문화 워크숍 신청 승인 대기', meta: '문화활동' },
    ],
    결과보고: [
      { title: '문제해결 세미나 결과보고 작성', meta: '교육활동', dday: 'D-3' },
      { title: '오리지널 콘텐츠 투어 결과보고', meta: '문화활동', dday: 'D-0' },
    ],
    완료: [
      { title: '창의적 문제해결 워크숍', meta: '교육활동' },
      { title: '리프레시 세미나', meta: '문화활동' },
    ],
  },
  external: {
    신청: [{ title: '데이터 기반 의사결정 과정', meta: '사외교육' }],
    결과보고: [
      { title: 'B2B SaaS 실무 전략 세미나', meta: '외부 컨퍼런스', dday: 'D+2' },
      { title: '비즈니스 영어 프레젠테이션', meta: '어학 과정', dday: 'D-1' },
    ],
    완료: [
      { title: '개인정보보호 실무 과정', meta: '필수 교육' },
      { title: 'AI 활용 업무 자동화 부트캠프', meta: '직무 심화' },
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
        {
          label: '기대 효과',
          type: 'textarea',
          value:
            '콘텐츠 경험 후 팀 내 공유 메모를 작성하고 관련 인사이트를 회의에서 간단히 공유할 예정입니다.',
          full: true,
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
          { label: '신청금액', value: '100,000원', caption: '승인 요청 금액' },
          { label: '지급금액', value: '100,000원', tone: 'caution', caption: '최종 지급 예정 금액' },
        ],
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
          { label: '교육장소', type: 'readonly', value: row.place },
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
          { label: '신청금액', value: '100,000원', caption: '승인 요청 금액' },
          { label: '지급금액', value: '100,000원', tone: 'caution', caption: '최종 지급 예정 금액' },
        ],
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
          { label: '신청금액', value: '200,000원', caption: '승인 요청 금액' },
          { label: '지급금액', value: '200,000원', tone: 'caution', caption: '최종 지급 예정 금액' },
        ],
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
}

let confirmCancelHandler = null

const elements = {
  brandButton: document.querySelector('.brand-button'),
  transition: document.getElementById('page-transition'),
  topNav: document.querySelector('.top-nav'),
  topNavIndicator: document.querySelector('.top-nav-indicator'),
  homeTab: document.querySelector('.top-tab[data-nav="홈"]'),
  topTabs: Array.from(document.querySelectorAll('.top-tab')),
  pageSections: Array.from(document.querySelectorAll('.page-section')),
  progressBars: Array.from(document.querySelectorAll('.progress-fill')),
  customSelects: Array.from(document.querySelectorAll('[data-custom-select]')),
  homeRevealEls: Array.from(document.querySelectorAll('.home-reveal')),
}

const VIEW_TRANSITION_DELAY_MS = 140
let customSelectGlobalsBound = false

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

function scheduleActiveBarUpdate() {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(updateActiveBar)
  })
}

function updateActiveBar() {
  const activeTab = getTopTab(state.currentView)

  if (!elements.topNav || !elements.topNavIndicator || !activeTab) {
    return
  }

  const navRect = elements.topNav.getBoundingClientRect()
  const tabRect = activeTab.getBoundingClientRect()
  const translateX = tabRect.left - navRect.left
  const translateY = tabRect.top - navRect.top

  elements.topNavIndicator.style.width = `${tabRect.width}px`
  elements.topNavIndicator.style.height = `${tabRect.height}px`
  elements.topNavIndicator.style.transform = `translate(${translateX}px, ${translateY}px)`
  elements.topNavIndicator.style.opacity = '1'
}

function setActiveTab(viewName) {
  elements.topTabs.forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.nav === viewName)
  })

  // Root cause: the active bar depends on measured tab size/position,
  // so it must be recalculated after every state or layout change.
  scheduleActiveBarUpdate()
}

function initializeActiveBar() {
  if (!elements.topNavIndicator) {
    return
  }

  elements.topNavIndicator.classList.add('no-transition')
  updateActiveBar()

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

function syncHomeProgressBars({ animate = false, token = state.homeAnimationToken } = {}) {
  if (!elements.progressBars.length) {
    return
  }

  cancelPendingBudgetBarFrame()

  if (!animate || !state.budgetBarsInitialized) {
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
    syncHomeProgressBars({ animate: replayHomeAnimation, token })
  }
}

function setActiveView(nextView, { replayHomeAnimation = true, token = state.homeAnimationToken } = {}) {
  if (nextView === state.currentView && nextView !== '홈') {
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
      if (tab.dataset.nav === '홈') {
        goToHome({ replayAnimation: true })
        return
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

function measureStatusListHeight(list, group) {
  const card = list.closest('.status-card')

  if (!card) {
    return 0
  }

  const measurementNode = document.createElement('div')
  measurementNode.className = `${list.className} status-list-measure`
  measurementNode.style.width = `${list.clientWidth || card.clientWidth}px`
  measurementNode.style.position = 'absolute'
  measurementNode.style.visibility = 'hidden'
  measurementNode.style.pointerEvents = 'none'
  measurementNode.style.left = '-9999px'
  measurementNode.style.top = '0'

  const statuses = Object.keys(homeStatusData[group])
  let maxHeight = list.offsetHeight

  statuses.forEach((status) => {
    const items = homeStatusData[group][status] || []
    const showDday = status === '결과보고'
    measurementNode.innerHTML = items.map((item) => createStatusItemMarkup(item, showDday)).join('')
    document.body.appendChild(measurementNode)
    maxHeight = Math.max(maxHeight, measurementNode.offsetHeight)
    measurementNode.remove()
  })

  return maxHeight
}

function updateStatusListHeights() {
  document.querySelectorAll('.status-list').forEach((list) => {
    const group = list.dataset.list
    const maxHeight = measureStatusListHeight(list, group)

    if (maxHeight > 0) {
      list.style.minHeight = `${maxHeight}px`
    }
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
      updateStatusListHeights()
    })
  })

  renderStatusGroup('activity', '결과보고')
  renderStatusGroup('external', '결과보고')
  updateStatusListHeights()
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

function renderApplicationDetailField(field) {
  const fieldClass = `detail-field${field.full ? ' is-full' : ''}`
  const helpMarkup = field.help ? `<p class="field-help">${field.help}</p>` : ''

  if (field.type === 'select') {
    return `
      <div class="${fieldClass}">
        <label class="detail-field-label">${field.label}</label>
        ${renderSelectFieldMarkup(field.options, field.value)}
        ${helpMarkup}
      </div>
    `
  }

  if (field.type === 'textarea') {
    return `
      <div class="${fieldClass}">
        <label class="detail-field-label">${field.label}</label>
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
        <label class="detail-field-label">${field.label}</label>
        <div class="detail-input-row is-daterange">
          <label class="field date-field">
            <input type="date" value="${field.start || ''}" />
            <span class="date-field-icon" aria-hidden="true"></span>
          </label>
          <span class="date-range-separator" aria-hidden="true">~</span>
          <label class="field date-field">
            <input type="date" value="${field.end || ''}" />
            <span class="date-field-icon" aria-hidden="true"></span>
          </label>
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
        ? `<div class="field is-readonly"><span>${field.secondaryValue || ''}</span></div>`
        : `<label class="field"><input type="text" value="${field.secondaryValue || ''}" /></label>`

    return `
      <div class="${fieldClass}">
        <label class="detail-field-label">${field.label}</label>
        <div class="detail-input-row is-inline">
          <label class="field">
            <input type="text" inputmode="${field.primaryType === 'number' ? 'numeric' : 'text'}" value="${primaryValue}" placeholder="${field.primaryPlaceholder || ''}"${field.primaryType === 'number' ? ' data-application-expected-cost-input' : ''} />
          </label>
          ${secondaryContent}
        </div>
        ${helpMarkup}
      </div>
    `
  }

  if (field.type === 'readonly') {
    return `
      <div class="${fieldClass}">
        <label class="detail-field-label">${field.label}</label>
        <div class="field is-readonly">
          <span>${field.value || ''}</span>
        </div>
        ${helpMarkup}
      </div>
    `
  }

  return `
    <div class="${fieldClass}">
      <label class="detail-field-label">${field.label}</label>
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
              <p class="report-notice-title">${notice.title}</p>
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
  const config = applicationDetailConfigs[menu]

  if (!config) {
    return
  }

  const titleNode = document.querySelector('[data-application-detail-title]')
  const breadcrumbNode = document.querySelector('[data-application-detail-breadcrumb]')
  const descriptionNode = document.querySelector('[data-application-detail-description]')
  const summaryNode = document.querySelector('[data-application-budget-summary]')
  const noticeNode = document.querySelector('[data-application-notices]')

  if (titleNode) {
    titleNode.textContent = config.title
  }

  if (breadcrumbNode) {
    breadcrumbNode.textContent = config.breadcrumb
  }

  if (descriptionNode) {
    descriptionNode.textContent = config.description
  }

  const selectedRow = getApplicationSelectedRow(menu)
  const detailFields = structuredClone(config.fields)

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
        <label class="detail-field-label">${field.label}</label>
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
        <label class="detail-field-label">${field.label}</label>
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
          <button type="button" class="report-upload-remove" data-report-upload-remove="${item.id}">삭제</button>
        </div>
      `,
    )
    .join('')

  renderIcons()
}

function renderReportDetail() {
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
  const breadcrumbNode = document.querySelector('[data-report-detail-breadcrumb]')
  const descriptionNode = document.querySelector('[data-report-detail-description]')
  const costNode = document.querySelector('[data-report-cost-summary]')
  const noticeNode = document.querySelector('[data-report-notices]')

  if (breadcrumbNode) {
    breadcrumbNode.textContent = config.breadcrumb
  }

  if (descriptionNode) {
    descriptionNode.textContent =
      '결과보고 작성을 위해 활동 내용과 비용 정보를 입력하고 관련 자료를 함께 제출합니다.'
  }

  ;['basic', 'education', 'account'].forEach((sectionKey) => {
    const target = document.querySelector(`[data-report-detail-fields="${sectionKey}"]`)

    if (target) {
      target.innerHTML = (draft[sectionKey] || [])
        .map((field) => renderReportDetailField(field, sectionKey))
        .join('')
    }
  })

  if (costNode) {
    costNode.innerHTML = (draft.cost || [])
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
  return accountFields.every((field) => String(field.value || '').trim() !== '')
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
      document.querySelector(`[data-filter-title="${group}"]`).textContent = button.dataset.menu
      syncMenuButtons(group, button.dataset.menu)

      if (group === 'application') {
        closeApplicationDetail({ resetDraft: true })
        renderApplicationFilterActions()
        renderApplicationTable()
      } else if (group === 'report') {
        closeReportDetail()
        renderReportTable()
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
        window.alert('은행, 계좌번호, 예금주를 모두 입력해주세요.')
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
      const input = event.target.closest('[data-report-field]')

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

function bindWindowEvents() {
  window.addEventListener('resize', () => {
    window.requestAnimationFrame(updateActiveBar)
    window.requestAnimationFrame(updateStatusListHeights)
  })

  window.addEventListener('load', () => {
    updateActiveBar()
    updateStatusListHeights()
  })

  if ('ResizeObserver' in window && elements.topNav) {
    const navResizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(updateActiveBar)
    })

    navResizeObserver.observe(elements.topNav)
  }
}

function initializeApp() {
  if (state.hasInitialized) {
    return
  }

  state.hasInitialized = true
  renderIcons()
  bindCustomSelects()
  bindTabEvents()
  bindWindowEvents()
  initializeStatusCards()
  initializeFilterViews()
  bindConfirmModalEvents()
  bindApplicationDetailEvents()
  bindReportDetailEvents()
  bindEducationStatusEvents()
  showView('홈')
  initializeHomeView()
  elements.topTabs.forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.nav === state.currentView)
  })
  initializeActiveBar()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp, { once: true })
} else {
  initializeApp()
}
