import React from 'react';

import './answer-toggle.scss';

const AnswerToggle = () => {
	return (
		<div className="elementor-widget-container">
			<div className="elementor-toggle">
				<div class="elementor-toggle-item">
					<div
						id="elementor-tab-title-1431"
						class="elementor-tab-title"
						data-tab="1"
						role="tab"
						aria-controls="elementor-tab-content-1431"
					>
						<span class="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
							<span class="elementor-toggle-icon-closed">
								<i class="fas fa-angle-down" />
							</span>
							<span class="elementor-toggle-icon-opened">
								<i class="elementor-toggle-icon-opened fas fa-angle-up" />
							</span>
						</span>
						<a href="">How does this course compare to other bootcamps?</a>
					</div>
					<div
						id="elementor-tab-content-1431"
						class="elementor-tab-content elementor-clearfix"
						data-tab="1"
						role="tabpanel"
						aria-labelledby="elementor-tab-title-1431"
					>
						<p>
							At Codeworks you get approximately double the number of learning hours compared to most
							other bootcamps. But numbers tell only one side of the story. We also undertake incredible
							efforts to provide you with the best instructors and learning tools available. As a result,
							you understand how to think like a Software Engineer, instead of simply practicing the
							latest tools.
						</p>
						<p>
							We’ve prepared a quick report that sums up core objective parameters from different
							Full-Stack courses, to help prospective students make their choice.
						</p>
						<p>
							Other parameters that are very relevant but more subjective, like the quality of the
							curriculum, or the learning strategy, are left to personal judgement. Each school has its
							own vision on these topics.
						</p>
						<p>
							<a href="https://codeworks.me/bootcamp-comparison/">
								<span style="color: #657786;">Browse the report ›</span>
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnswerToggle;
