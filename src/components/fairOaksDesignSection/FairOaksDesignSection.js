import fairOaks_img from '../../resourses/img/fairOaks_img.png';
import arrow from '../../resourses/symbols/arrow.png';

import './fairOaksDesignSection.css';

const FairOaksDesignSection = () => {
	return (
		<div className={'fairOaksDesign'}>
			<div className={'fairOaksDesign__img-div'}>
				<img src={fairOaks_img} alt={'Fair Oaks Design studio'}/>
			</div>
			<div className={'fairOaksDesign__links-box'}>
				<div className={'fairOaksDesign__links'}>
					<a className={'fairOaksDesign__link-one'}>Fair Oaks Design Co.</a>
					<a className={'fairOaksDesign__link-two'}>We Create a Design That Meets Your Vision and Budget.</a>
					<div>
						<img src={arrow} alt={'arrow'}/>
					</div>
					<p>Fair Oaks Design Co.</p>
				</div>
			</div>
		</div>
	)
}

export default FairOaksDesignSection;