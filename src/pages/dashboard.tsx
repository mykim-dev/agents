import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Flower2, Leaf, Sun, Snowflake, ArrowLeft, Minimize2, Newspaper, FileArchive, HardDriveDownload, CircleCheck, ChevronDown, PenLine, Expand } from 'lucide-react'
import '../dashboard.css'

function Dashboard() {
	const [isDetailCollapsed, setIsDetailCollapsed] = useState(false)
	const [isDetailFull, setIsDetailFull] = useState(false)
	const navigate = useNavigate()

	return (
		<div className="layout-dashboard">
			<header>
				<Button variant="ghost" size="icon" className="w-[3rem] h-[3rem]" onClick={() => navigate(import.meta.env.BASE_URL + '/')}><ArrowLeft aria-hidden="true" size={16} /></Button>
				<h1>Agent Studio</h1>
				<div className="header-actions">
					<Button variant="ghost" size="icon">
						<FileArchive aria-hidden="true" size={16} />
					</Button>
				</div>
			</header>
			<main>
				<div className="dashboard-wrap">
					<nav className="dashboard-nav" aria-label="주요 기능">
						<ul>
							<li><Button variant="ghost" aria-label="봄"><Flower2 aria-hidden="true" /></Button></li>
							<li><Button variant="ghost" aria-label="가을"><Leaf aria-hidden="true" /></Button></li>
							<li><Button variant="ghost" aria-label="여름"><Sun aria-hidden="true" /></Button></li>
							<li><Button variant="ghost" aria-label="겨울"><Snowflake aria-hidden="true" /></Button></li>
						</ul>
					</nav>
					<div className={`dashboard-contents ${isDetailCollapsed ? 'is-detail-collapsed' : isDetailFull ? 'is-detail-full' : ''}`}>
						<ScrollArea className='dashboard-contents-scroll'>
							<section className="chat-wrap">
								<div className="chat-list">
									<dl className="chat-item me">
										<dt>
											<strong>me</strong>
											<span className="chat-time">12:12</span>
										</dt>
										<dd>
											<div className="chat-message-group">
												<p className="chat-message message-text">
													요즘IT 8월 인기 콘텐츠를 확인하고 9월 콘텐츠 기획을 위한 분석 보고서를 작성해 줘 요즘IT 8월 인기 콘텐츠를 확인하고 9월 콘텐츠 기획을 위한 분석 보고서를 작성해 줘 요즘IT 8월 인기 콘텐츠를 확인하고 9월 콘텐츠 기획을 위한 분석 보고서를 작성해 줘 요즘IT 8월 인기 콘텐츠를 확인하고 9월 콘텐츠 기획을 위한 분석 보고서를 작성해 줘
												</p>
												<p className="chat-message message-text">
													<a href="https://yozm.wishket.com/magazine/list/popular/" target="_blank">https://yozm.wishket.com/magazine/list/popular/</a>
												</p>
											</div>
										</dd>
									</dl>
									<dl className="chat-item ai">
										<dt>
											<strong>AI</strong>
											<span className="chat-time">12:12</span>
										</dt>
										<dd>
											<div className="chat-message-group">
												<p className="chat-message message-text">알겠습니다. 요청하신 분석 보고서 작성을 시작하겠습니다.</p>
											</div>
										</dd>
									</dl>
									<dl className="chat-item ai">
										<dt>
											<strong>AI</strong>
											<span className="chat-time">12:12</span>
										</dt>
										<dd>
											<div className="chat-message-group">
												<p className="chat-message message-text">다음과 같은 작업을 수행하겠습니다:</p>
												<ol className="chat-message message-ol">
													<li>요즘IT 8월 인기 콘텐츠 수집 및 분석</li>
													<li>콘텐츠 트렌드 및 패턴 분석</li>
													<li>9월 콘텐츠 기획 전략 수립</li>
													<li>분석 보고서 작성 및 전달</li>
												</ol>
												<p className="chat-message message-text">작업 중 언제든지 저를 중단시키고 새로운 정보 제공이나 계획 조정을 요청할 수 있습니다.</p>
												<Collapsible defaultOpen className="group chat-message message-collapsible">
													<CollapsibleTrigger className="message-collapsible-trigger">
														<CircleCheck size={16} />
														요즘 IT 8월 인기 콘텐츠 수집 및 분석
														<ChevronDown size={16} className="group-data-[state=open]:rotate-180" />
													</CollapsibleTrigger>
													<CollapsibleContent className="message-collapsible-content">
														<p className="chat-message message-text">
															8월 인기 콘텐츠를 수집 후 분석하는 단계입니다. 현재 페이지를 확인하며 주제별로 AI, 개발, 비즈니스 등 다양한 트렌드와 강세 주제를 파악하고 있습니다. 앞으로 콘텐츠의 핵심 패턴과 인기 요인을 분석하여 9월 기획 전략 수립에 활용할 예정입니다.
														</p>
													</CollapsibleContent>
												</Collapsible>
												<Collapsible defaultOpen className="group chat-message message-collapsible">
													<CollapsibleTrigger className="message-collapsible-trigger">
														<CircleCheck size={16} />
														콘텐츠 트렌드 및 패턴 분석
														<ChevronDown size={16} className="group-data-[state=open]:rotate-180" />
													</CollapsibleTrigger>
													<CollapsibleContent className="message-collapsible-content">
														<Button variant="ghost" className="chat-message message-file">
															<i className="file-type type-code"><PenLine aria-hidden="true" size={12} /></i>
															<span className='file-md'> 파일을 읽는 중 popular_articles.md</span>
														</Button>
														<p className="chat-message message-text">
															8월 인기 콘텐츠를 모두 수집하고 파일에 저장했습니다. 핵심 주제는 개발, AI, 비즈니스 등이며, 이번 단계에서는 상세 분석하여 9월 콘텐츠 전략에 활용할 계획입니다. 앞으로도 더 많은 콘텐츠를 검토하고 패턴을 파악해 전략에 반영하겠습니다.
														</p>
														<Button variant="ghost" className="chat-message message-file">
															<i className="file-type type-code"><PenLine aria-hidden="true" size={12} /></i>
															<span className='file-name'> 명령 실행 중 python3 -c " import re with open('popular_articles.md', 'r', encoding='utf-8') as f: content = f.read() print(re.findall(r'#(\d+)', content))"</span>
														</Button>
														<Button variant="ghost" className="chat-message message-file">
															<i className="file-type type-code"><PenLine aria-hidden="true" size={12} /></i>
															<span className='file-name'> 명령 실행 중 python3 -c " import re with open('popular_articles.md', 'r', encoding='utf-8') as f: content = f.read() print(re.findall(r'#(\d+)', content))"</span>
														</Button>
														<Button variant="ghost" className="chat-message message-file">
															<i className="file-type type-code"><PenLine aria-hidden="true" size={12} /></i>
															<span className='file-name'> 명령 실행 중 python3 -c " import re with open('popular_articles.md', 'r', encoding='utf-8') as f: content = f.read() print(re.findall(r'#(\d+)', content))"</span>
														</Button>
														<Button variant="ghost" className="chat-message message-file">
															<i className="file-type type-code"><PenLine aria-hidden="true" size={12} /></i>
															<span className='file-name'> 명령 실행 중 python3 -c " import re with open('popular_articles.md', 'r', encoding='utf-8') as f: content = f.read() print(re.findall(r'#(\d+)', content))"</span>
														</Button>
														<Button variant="ghost" className="chat-message message-file">
															<i className="file-type type-code"><PenLine aria-hidden="true" size={12} /></i>
															<span className='file-name'> 명령 실행 중 python3 -c " import re with open('popular_articles.md', 'r', encoding='utf-8') as f: content = f.read() print(re.findall(r'#(\d+)', content))"</span>
														</Button>
														<Button variant="ghost" className="chat-message message-file">
															<i className="file-type type-code"><PenLine aria-hidden="true" size={12} /></i>
															<span className='file-name'> 명령 실행 중 python3 -c " import re with open('popular_articles.md', 'r', encoding='utf-8') as f: content = f.read() print(re.findall(r'#(\d+)', content))"</span>
														</Button>
													</CollapsibleContent>
												</Collapsible>
											</div>
										</dd>
									</dl>
								</div>
							</section>
							<aside className="detail-wrap">
								<div className="detail-header">
									<h3>상세영역</h3>
									<div className="detail-header-actions">
										<Button variant="ghost" size="icon">
											<HardDriveDownload aria-hidden="true" size={16} />
										</Button>
										<Button variant="ghost" size="icon" onClick={() => setIsDetailFull(prev => !prev)} aria-pressed={!isDetailFull}>
											<Expand aria-hidden="true" size={16} />
										</Button>
										<Button variant="ghost" size="icon" onClick={() => setIsDetailCollapsed(prev => !prev)} aria-pressed={!isDetailCollapsed}>
											<Minimize2 aria-hidden="true" size={16} />
										</Button>
									</div>
								</div>
								<div className="detail-body">

								</div>
							</aside>
						</ScrollArea>
						<Button
							variant="ghost"
							size="icon"
							className='toggle-detail'
							onClick={() => setIsDetailCollapsed(prev => !prev)}
							aria-pressed={isDetailCollapsed}
						>
							<Newspaper aria-hidden="true" size={16} />
						</Button>
						<div className="prompt-wrap">
							<Textarea placeholder="Agent에게 요청하기" />
							<Button variant="default" size="sm">보내기</Button>
						</div>
					</div>
				</div>
			</main >
		</div >
	)
}

export default Dashboard


