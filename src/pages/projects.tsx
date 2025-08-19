import { useNavigate } from 'react-router-dom'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Plus } from 'lucide-react'
import '../projects.css'

function Projects() {
	const navigate = useNavigate()
	const projects = [
		{ id: 'p1', name: '물류 관리 시스템', updatedAt: '2025-02-01' },
		{ id: 'p2', name: '콘텐츠 분석 에이전트', updatedAt: '2025-01-28' },
		{ id: 'p3', name: '이커머스 대시보드', updatedAt: '2025-01-15' },
		{ id: 'p4', name: '물류 관리 시스템', updatedAt: '2025-02-01' },
		{ id: 'p5', name: '콘텐츠 분석 에이전트', updatedAt: '2025-01-28' },
		{ id: 'p6', name: '이커머스 대시보드', updatedAt: '2025-01-15' },
		{ id: 'p7', name: '물류 관리 시스템', updatedAt: '2025-02-01' },
		{ id: 'p8', name: '콘텐츠 분석 에이전트', updatedAt: '2025-01-28' },
		{ id: 'p9', name: '이커머스 대시보드', updatedAt: '2025-01-15' },
		{ id: 'p10', name: '물류 관리 시스템', updatedAt: '2025-02-01' },
		{ id: 'p11', name: '콘텐츠 분석 에이전트', updatedAt: '2025-01-28' },
		{ id: 'p12', name: '이커머스 대시보드', updatedAt: '2025-01-15' },
		{ id: 'p13', name: '물류 관리 시스템', updatedAt: '2025-02-01' },
		{ id: 'p14', name: '콘텐츠 분석 에이전트', updatedAt: '2025-01-28' },
		{ id: 'p15', name: '이커머스 대시보드', updatedAt: '2025-01-15' },
	]

	return (
		<div className="layout-projects">
			<header>
				<Button variant="ghost" size="icon" className="w-[3rem] h-[3rem]" onClick={() => navigate(import.meta.env.BASE_URL)}>
					<ArrowLeft aria-hidden="true" size={16} />
				</Button>
				<h1>PROJECTS</h1>
				<div className="header-actions">
					<Button variant="default" size="sm" onClick={() => navigate(import.meta.env.BASE_URL + 'dashboard')}>
						<Plus aria-hidden="true" size={16} className="mr-1" />
						새 프로젝트
					</Button>
				</div>
			</header>
			<main>
				<ScrollArea className="projects-scroll">
					<div className="projects-wrap">
						<div className="projects-list">
							{projects.map(p => (
								<Card key={p.id} className="card-item">
									<CardTitle className="card-item-title">{p.name}</CardTitle>
									<CardDescription className="card-item-description">최근 업데이트: {p.updatedAt}</CardDescription>
									<CardContent className="card-item-content">
										<Button variant="outline" size="sm" onClick={() => navigate(import.meta.env.BASE_URL + 'dashboard')}>열기</Button>
										<Button variant="outline" size="sm">Agent Studio</Button>
										<Button variant="outline" size="sm">CALS Studio</Button>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</ScrollArea>
			</main>
		</div>
	)
}

export default Projects