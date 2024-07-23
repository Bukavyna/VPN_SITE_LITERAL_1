import clinicBased from '../../resourses/img/clinic-based.png';
import angleRight from '../../resourses/symbols/angle-right.svg';

import './supportSection.css';

const SupportSection = () => {
  return (
		<div className={'support-section'}>
			<img className={'support-section__img'} src={clinicBased} alt={'clinic'}/>
			<div className={'support-section__text-box'}>
				<h3 className={'support-section__title'}>Learn How We Can Support you</h3>
				<p className={'support-section__text'}>In Home & Clinic-Based Treatment Options</p>
				<div className={'support-section__text-box-bottom'}>
					<p className={'support-section__text_bold left'}>Affinity Autism</p>
					<p className={'support-section__text_bold right'}>Open<img className={'support-section__img-angle-right'} src={angleRight} alt={'angle right'}/>
					</p>
				</div>
			</div>
		</div>
  )
}

export default SupportSection;