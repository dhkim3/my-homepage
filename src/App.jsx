import { useEffect, useState } from 'react'
import {
  Bell,
  BookOpen,
  ChevronRight,
  CreditCard,
  FilePlus2,
  FileText,
  FolderSearch2,
  GraduationCap,
  Search,
  User,
} from 'lucide-react'

const topTabs = ['홈', '교육신청', '결과보고', '교육분석']
const homeProfile = {
  name: '김다훈',
  team: '정보시스템 Cell',
  role: 'CP',
}

const homeNotices = [
  { title: '2026년 교육 운영 기준 안내', date: '2026.01.08' },
  { title: '역량 개발 계획 제출 일정 안내', date: '2026.01.12' },
  { title: '교육비 집행 관련 유의사항', date: '2026.01.18' },
  { title: '사외교육 결과보고 등록 안내', date: '2026.01.23' },
]

const budgetTableRows = [
  {
    label: '전체 금액',
    totalAmount: '1,500,000 원',
    cultureAmount: '300,000 원',
    totalValue: 100,
    cultureValue: 100,
  },
  {
    label: '사용 금액',
    totalAmount: '100,000 원',
    cultureAmount: '100,000 원',
    totalValue: 6.7,
    cultureValue: 33.3,
  },
  {
    label: '잔여 금액',
    totalAmount: '1,400,000 원',
    cultureAmount: '200,000 원',
    totalValue: 93.3,
    cultureValue: 66.7,
  },
]

const statusTabs = ['신청대기', '결과보고대기', '교육수료']

const educationActivityData = {
  신청대기: [
    { title: '직무 역량 강화 워크숍 신청', meta: '교육활동' },
    { title: '조직문화 워크숍 신청 승인 대기', meta: '문화활동' },
  ],
  결과보고대기: [
    { title: '문제해결 세미나 결과보고 작성', meta: '교육활동' },
    { title: '오리지널 콘텐츠 투어 결과보고', meta: '문화활동' },
  ],
  교육수료: [
    { title: '창의적 문제해결 워크숍', meta: '교육활동' },
    { title: '리프레시 세미나', meta: '문화활동' },
  ],
}

const externalEducationData = {
  신청대기: [{ title: '데이터 기반 의사결정 과정', meta: '사외교육' }],
  결과보고대기: [
    { title: 'B2B SaaS 실무 전략 세미나', meta: '외부 컨퍼런스' },
    { title: '비즈니스 영어 프레젠테이션', meta: '어학 과정' },
  ],
  교육수료: [
    { title: '개인정보보호 실무 과정', meta: '필수 교육' },
    { title: 'AI 활용 업무 자동화 부트캠프', meta: '직무 심화' },
  ],
}

const applicationMenus = ['교육비 신청', '문화비 신청', '사외 교육 신청']
const applicationColumns = [
  '적용년도',
  '과정명',
  '학습방법',
  '교육기간',
  '교육시간',
  '교육장소',
  '결재상태',
]

const applicationRowsByMenu = {
  '교육비 신청': [
    {
      year: '2026',
      courseName: '문제해결 워크숍',
      learningMethod: '집합교육',
      period: '2026.03.12 - 2026.03.13',
      hours: '8시간',
      place: '비상교육 러닝센터',
      approvalStatus: '결재대기',
    },
  ],
  '문화비 신청': [],
  '사외 교육 신청': [],
}

const reportMenus = ['교육 문화 활동 결과보고', '사외 교육 결과보고']
const reportColumns = [
  '적용년도',
  '과정명',
  '교육기간',
  '교육시간',
  '교육장소',
  '결재상태',
  '교육 이수 상태',
]

const reportColumnClassMap = {
  적용년도: 'w-[84px] whitespace-nowrap',
  과정명: 'w-[23%]',
  교육기간: 'w-[170px] whitespace-nowrap',
  교육시간: 'w-[82px] whitespace-nowrap',
  교육장소: 'w-[20%]',
  결재상태: 'w-[104px] whitespace-nowrap',
  '교육 이수 상태': 'w-[108px] whitespace-nowrap',
}

const reportRowsByMenu = {
  '교육 문화 활동 결과보고': [
    {
      year: '2026',
      courseName: '[문화] 선과 치히로의 행방불명 오리지널 투어',
      period: '2026.03.05 - 2026.03.05',
      hours: '0',
      place: '예술의전당 오페라하우스',
      approvalStatus: '교육신청상태',
      completionStatus: '진행중',
    },
  ],
  '사외 교육 결과보고': [],
}

function Header({ currentView, onNavigate }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate('홈')}
          className="flex cursor-pointer items-center gap-3 rounded-2xl outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-200">
            VS
          </div>
          <h1 className="text-lg font-semibold text-slate-900">교육 / 역량관리 시스템</h1>
        </button>

        <nav className="hidden items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1 md:flex">
          {topTabs.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onNavigate(item)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                currentView === item
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'text-slate-500 hover:bg-white hover:text-slate-900'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

function SectionTitle({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-slate-500" strokeWidth={1.8} />
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
    </div>
  )
}

function InfoPill({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 px-4 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-700">{value}</p>
    </div>
  )
}

function ProfileCard() {
  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/60 xl:min-h-[188px]">
      <SectionTitle icon={User} title="개인 프로필" />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <InfoPill label="이름" value={homeProfile.name} />
        <InfoPill label="직무" value={homeProfile.role} />
        <div className="sm:col-span-2">
          <InfoPill label="소속" value={homeProfile.team} />
        </div>
      </div>
    </section>
  )
}

function NoticeCard() {
  return (
    <section className="flex flex-1 flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/60 xl:min-h-[264px]">
      <SectionTitle icon={Bell} title="공지사항" />

      <div className="mt-4 flex-1 space-y-1.5">
        {homeNotices.map((notice) => (
          <a
            key={notice.title}
            href="/"
            className="flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition hover:bg-slate-50"
          >
            <span className="truncate text-sm font-medium text-slate-700">{notice.title}</span>
            <span className="shrink-0 text-xs font-medium text-slate-400">{notice.date}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

function BudgetCard() {
  const [animateBars, setAnimateBars] = useState(false)

  useEffect(() => {
    setAnimateBars(false)

    const frameId = window.requestAnimationFrame(() => {
      setAnimateBars(true)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/60 xl:min-h-[476px]">
      <SectionTitle icon={CreditCard} title="2026년 교육 / 문화 활동비 사용 현황" />

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 px-4 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            전체 금액
          </p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">150만원</p>
        </div>
        <div className="rounded-2xl bg-blue-50 px-4 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-500">
            사용률
          </p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">6.7%</p>
        </div>
        <div className="rounded-2xl bg-emerald-50 px-4 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-600">
            문화비 잔여
          </p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">20만원</p>
        </div>
      </div>

      <div className="mt-4 flex-1 overflow-hidden rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-slate-200/80 bg-white/80 px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          <div>구분</div>
          <div className="text-right">전체 금액</div>
          <div className="text-right">문화 활동비</div>
        </div>

        <div className="divide-y divide-slate-200/70">
          {budgetTableRows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-4 px-5 py-5 transition hover:bg-white/80 sm:grid-cols-[1.1fr_1fr_1fr]"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-1.5 rounded-full bg-slate-200">
                  <div
                    className={`h-full rounded-full ${
                      row.label === '전체 금액'
                        ? 'bg-slate-900'
                        : row.label === '사용 금액'
                          ? 'bg-blue-600'
                          : 'bg-emerald-500'
                    }`}
                  />
                </div>
                <p className="text-sm font-semibold text-slate-900">{row.label}</p>
              </div>

              <div className="space-y-3">
                <p className="text-right text-xl font-semibold tracking-tight text-slate-900">
                  {row.totalAmount}
                </p>
                <div className="h-2 rounded-full bg-slate-200">
                  <div
                    className={`h-2 rounded-full transition-all duration-700 ease-out ${
                      row.label === '전체 금액'
                        ? 'bg-slate-900'
                        : row.label === '사용 금액'
                          ? 'bg-blue-600'
                          : 'bg-emerald-500'
                    }`}
                    style={
                      row.label === '잔여 금액'
                        ? { width: `${animateBars ? row.totalValue : 0}%`, marginLeft: 'auto' }
                        : { width: `${animateBars ? row.totalValue : 0}%` }
                    }
                  />
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-right text-xl font-semibold tracking-tight text-slate-900">
                  {row.cultureAmount}
                </p>
                <div className="h-2 rounded-full bg-slate-200">
                  <div
                    className={`h-2 rounded-full transition-all duration-700 ease-out ${
                      row.label === '전체 금액'
                        ? 'bg-slate-900'
                        : row.label === '사용 금액'
                          ? 'bg-blue-600'
                          : 'bg-emerald-500'
                    }`}
                    style={
                      row.label === '잔여 금액'
                        ? { width: `${animateBars ? row.cultureValue : 0}%`, marginLeft: 'auto' }
                        : { width: `${animateBars ? row.cultureValue : 0}%` }
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatusTabs({ activeTab, onChange }) {
  return (
    <div className="inline-flex flex-wrap gap-1.5 rounded-2xl border border-slate-200/80 bg-slate-50 p-1.5">
      {statusTabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
            activeTab === tab
              ? 'bg-slate-800 text-white shadow-sm shadow-slate-300/70'
              : 'text-slate-500 hover:bg-white hover:text-slate-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

function EducationStatusCard({ title, icon: Icon, data }) {
  const [activeTab, setActiveTab] = useState(statusTabs[0])
  const items = data[activeTab]

  return (
    <article className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/60 xl:min-h-[320px]">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-slate-500" strokeWidth={1.8} />
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      </div>

      <div className="mt-5">
        <StatusTabs activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div
            key={`${activeTab}-${item.title}`}
            className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-4"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                {item.meta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

function HomeView() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,0.96fr)_minmax(0,1.44fr)] xl:items-stretch">
          <div className="flex h-full flex-col gap-6">
            <ProfileCard />
            <NoticeCard />
          </div>

          <div className="h-full">
            <BudgetCard />
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <EducationStatusCard title="교육문화활동" icon={BookOpen} data={educationActivityData} />
          <EducationStatusCard title="사외교육" icon={GraduationCap} data={externalEducationData} />
        </section>
      </div>
    </main>
  )
}

function SideMenuCard({ selectedMenu, onSelectMenu, menus }) {
  return (
    <aside className="self-start rounded-3xl border border-slate-200/80 bg-white p-4 shadow-sm shadow-slate-200/60 xl:min-h-[220px]">
      <div className="rounded-2xl bg-slate-50 px-4 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">사용자</p>
        <p className="mt-2 text-lg font-semibold text-slate-900">김다훈 님</p>
      </div>

      <div className="mt-4 space-y-2">
        {menus.map((menu) => (
          <button
            key={menu}
            type="button"
            onClick={() => onSelectMenu(menu)}
            className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
              selectedMenu === menu
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>{menu}</span>
            <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
          </button>
        ))}
      </div>
    </aside>
  )
}

function FilterBar({
  courseName,
  onCourseNameChange,
  year,
  onYearChange,
  onSearch,
  selectedMenu,
}) {
  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/60">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-slate-900">{selectedMenu}</h2>
      </div>

      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="grid flex-1 grid-cols-1 gap-3 md:grid-cols-[minmax(0,1.5fr)_180px]">
          <label className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4">
            <input
              value={courseName}
              onChange={(event) => onCourseNameChange(event.target.value)}
              className="h-12 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              placeholder="과정명 입력"
            />
          </label>

          <label className="rounded-2xl border border-slate-200 bg-slate-50 px-4">
            <select
              value={year}
              onChange={(event) => onYearChange(event.target.value)}
              className="h-12 w-full bg-transparent text-sm font-medium text-slate-700 outline-none"
            >
              <option value="2026">2026년</option>
              <option value="2025">2025년</option>
              <option value="2024">2024년</option>
            </select>
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onSearch}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <Search className="h-4 w-4" strokeWidth={1.8} />
            검색
          </button>

          <button
            type="button"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 text-sm font-semibold text-white shadow-md shadow-slate-300 transition hover:bg-slate-800"
          >
            <FilePlus2 className="h-4 w-4" strokeWidth={1.8} />
            작성
          </button>
        </div>
      </div>
    </section>
  )
}

function EmptyState({ year, selectedMenu }) {
  return (
    <div className="flex min-h-[280px] flex-col items-center justify-center px-6 py-12 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-slate-500">
        <FolderSearch2 className="h-7 w-7" strokeWidth={1.8} />
      </div>
      <p className="mt-5 text-base font-semibold text-slate-900">
        {year}년도 {selectedMenu} 데이터가 없습니다
      </p>
    </div>
  )
}

function ApplicationTableCard({ rows, year, selectedMenu }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/60">
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead className="bg-slate-50">
            <tr>
              {applicationColumns.map((column) => (
                <th
                  key={column}
                  className="border-b border-slate-200 px-5 py-4 text-left text-sm font-semibold text-slate-700"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {rows.length > 0 ? (
              rows.map((row) => (
                <tr key={`${row.year}-${row.courseName}`} className="transition hover:bg-slate-50/70">
                  <td className="border-b border-slate-200/70 px-5 py-4 text-sm text-slate-600">
                    {row.year}
                  </td>
                  <td className="border-b border-slate-200/70 px-5 py-4 text-sm font-semibold text-slate-900">
                    {row.courseName}
                  </td>
                  <td className="border-b border-slate-200/70 px-5 py-4 text-sm text-slate-600">
                    {row.learningMethod}
                  </td>
                  <td className="border-b border-slate-200/70 px-5 py-4 text-sm text-slate-600">
                    {row.period}
                  </td>
                  <td className="border-b border-slate-200/70 px-5 py-4 text-sm text-slate-600">
                    {row.hours}
                  </td>
                  <td className="border-b border-slate-200/70 px-5 py-4 text-sm text-slate-600">
                    {row.place}
                  </td>
                  <td className="border-b border-slate-200/70 px-5 py-4 text-sm text-slate-700">
                    {row.approvalStatus}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={applicationColumns.length} className="p-0">
                  <EmptyState year={year} selectedMenu={selectedMenu} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function EducationApplyView() {
  const [selectedMenu, setSelectedMenu] = useState('교육비 신청')
  const [courseName, setCourseName] = useState('')
  const [year, setYear] = useState('2026')
  const [appliedFilters, setAppliedFilters] = useState({ courseName: '', year: '2026' })

  const rows = applicationRowsByMenu[selectedMenu].filter((row) => {
    const matchesYear = row.year === appliedFilters.year
    const matchesCourse = row.courseName
      .toLowerCase()
      .includes(appliedFilters.courseName.toLowerCase())
    return matchesYear && matchesCourse
  })

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 xl:items-start xl:grid-cols-[240px_minmax(0,1fr)]">
        <SideMenuCard
          selectedMenu={selectedMenu}
          onSelectMenu={setSelectedMenu}
          menus={applicationMenus}
        />

        <div className="space-y-6">
          <FilterBar
            courseName={courseName}
            onCourseNameChange={setCourseName}
            year={year}
            onYearChange={setYear}
            onSearch={() => setAppliedFilters({ courseName, year })}
            selectedMenu={selectedMenu}
          />
          <ApplicationTableCard rows={rows} year={appliedFilters.year} selectedMenu={selectedMenu} />
        </div>
      </div>
    </main>
  )
}

function ReportTableCard({ rows, year, selectedMenu }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/60">
      <div className="overflow-hidden">
        <table className="w-full table-fixed border-separate border-spacing-0">
          <thead className="bg-slate-50">
            <tr>
              {reportColumns.map((column) => (
                <th
                  key={column}
                  className={`border-b border-slate-200 px-3 py-4 text-left text-sm font-semibold text-slate-700 ${reportColumnClassMap[column] ?? ''}`}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {rows.length > 0 ? (
              rows.map((row) => (
                <tr key={`${row.year}-${row.courseName}`} className="transition hover:bg-slate-50/70">
                  <td className="border-b border-slate-200/70 whitespace-nowrap px-3 py-4 text-sm text-slate-600">
                    {row.year}
                  </td>
                  <td className="border-b border-slate-200/70 px-3 py-4 text-sm font-semibold text-slate-900">
                    {row.courseName}
                  </td>
                  <td className="border-b border-slate-200/70 whitespace-nowrap px-3 py-4 text-sm text-slate-600">
                    {row.period}
                  </td>
                  <td className="border-b border-slate-200/70 whitespace-nowrap px-3 py-4 text-sm text-slate-600">
                    {row.hours}
                  </td>
                  <td className="border-b border-slate-200/70 px-3 py-4 text-sm text-slate-600">
                    {row.place}
                  </td>
                  <td className="border-b border-slate-200/70 whitespace-nowrap px-3 py-4 text-sm text-slate-700">
                    {row.approvalStatus}
                  </td>
                  <td className="border-b border-slate-200/70 whitespace-nowrap px-3 py-4 text-sm text-slate-700">
                    {row.completionStatus}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={reportColumns.length} className="p-0">
                  <EmptyState year={year} selectedMenu={selectedMenu} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function ResultReportView() {
  const [selectedMenu, setSelectedMenu] = useState('교육 문화 활동 결과보고')
  const [courseName, setCourseName] = useState('')
  const [year, setYear] = useState('2026')
  const [appliedFilters, setAppliedFilters] = useState({ courseName: '', year: '2026' })

  const rows = reportRowsByMenu[selectedMenu].filter((row) => {
    const matchesYear = row.year === appliedFilters.year
    const matchesCourse = row.courseName
      .toLowerCase()
      .includes(appliedFilters.courseName.toLowerCase())
    return matchesYear && matchesCourse
  })

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 xl:items-start xl:grid-cols-[240px_minmax(0,1fr)]">
        <SideMenuCard selectedMenu={selectedMenu} onSelectMenu={setSelectedMenu} menus={reportMenus} />

        <div className="space-y-6">
          <FilterBar
            courseName={courseName}
            onCourseNameChange={setCourseName}
            year={year}
            onYearChange={setYear}
            onSearch={() => setAppliedFilters({ courseName, year })}
            selectedMenu={selectedMenu}
          />
          <ReportTableCard rows={rows} year={appliedFilters.year} selectedMenu={selectedMenu} />
          <div className="flex items-center gap-3 rounded-2xl px-1 text-sm text-rose-600">
            <FileText className="h-4 w-4" strokeWidth={1.8} />
            <span className="font-medium">2026년 결과보고는 2026년 1월 8일부터 가능합니다</span>
          </div>
        </div>
      </div>
    </main>
  )
}

function AnalysisPlaceholderView() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm shadow-slate-200/60">
        <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-slate-500">
            <FolderSearch2 className="h-7 w-7" strokeWidth={1.8} />
          </div>
          <p className="mt-5 text-base font-semibold text-slate-900">교육분석 화면 준비 중입니다</p>
        </div>
      </section>
    </main>
  )
}

function App() {
  const [currentView, setCurrentView] = useState('홈')
  const [homeViewKey, setHomeViewKey] = useState(0)
  const [displayedView, setDisplayedView] = useState('홈')
  const [isContentVisible, setIsContentVisible] = useState(true)

  const handleNavigate = (nextView) => {
    if (nextView === currentView && nextView !== '홈') return

    setIsContentVisible(false)

    window.setTimeout(() => {
      if (nextView === '홈') {
        setHomeViewKey((prev) => prev + 1)
      }

      setCurrentView(nextView)
      setDisplayedView(nextView)
      setIsContentVisible(true)
    }, 140)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-700">
      <Header currentView={currentView} onNavigate={handleNavigate} />

      <div
        className={`transition-all duration-200 ease-out ${
          isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-1.5 opacity-0'
        }`}
      >
        <div className={displayedView === '홈' ? 'block' : 'hidden'}>
          <HomeView key={homeViewKey} />
        </div>
        <div className={displayedView === '교육신청' ? 'block' : 'hidden'}>
          <EducationApplyView />
        </div>
        <div className={displayedView === '결과보고' ? 'block' : 'hidden'}>
          <ResultReportView />
        </div>
        <div className={displayedView === '교육분석' ? 'block' : 'hidden'}>
          <AnalysisPlaceholderView />
        </div>
      </div>
    </div>
  )
}

export default App
