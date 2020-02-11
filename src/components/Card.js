import React from 'react';
import PropTypes from 'prop-types'

const StylesDiv = {
	flexDirection: 'column',
	justifyContent: 'center',
	width: '40%',
	margin: '3rem 1rem',
	backgroundColor: '#fff',
	borderRadius: '25px',
	webkitBoxShadow: '7px 10px 24px 9px rgba(0, 0, 0, 0.56)',
	mozBoxShadow: '7px 10px 24px 9px rgba(0, 0, 0, 0.56)',
	boxShadow: '7px 10px 24px 9px rgba(0, 0, 0, 0.56)',
	fontFamily: 'Arial'  
}

const StylesH3 = {
    fontSize: '2rem',
    borderBottom: '1px solid black',
    margin: '1.25rem 1rem 2rem 1rem',
}
	
const InfoWrapper = {
    display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between'
}

const IngredientsWrapper = {
    display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-end',
	paddingRight: '1rem'
}
	
const Heading5 = {
    margin: '0.5rem 1rem',
    fontSize: '2rem',
    borderBottom: '1px solid black',
    fontWeight: 'lighter',
    fontStyle: 'italic'
}

const Span = {
    margin: '0 0 0 .5rem',
    padding: '0 0 0 .5rem',
    fontSize: '1.25rem',
    display: 'inline-block',
    paddingBottom: '0.75rem',
    fontWeight: 'lighter',
    fontStyle: 'italic'
}

const DivContainer = {
    display: 'flex',
    justifyContent: 'flex-end'
}

const Image = {
    width: '100%',
    borderRadiusTopLeft: '25px',
    borderRadiusTopRight: '25px'
}

export default function Card({image, title, ingredients, description}) {
	return (
		<div style={StylesDiv} key={title}>
			<img src={image} alt={title} style={Image}/>
			<div style={DivContainer}>
				<h3 style={StylesH3}>
                    {title}
                </h3>
			</div>
			<div style={InfoWrapper}>
				<div style={IngredientsWrapper}>
					<h5 style={Heading5}>
                        ingredients
                    </h5>
					{ingredients.map(item => (
						<span style={Span}>
                            {item.name}
                        </span>
					))}
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ingredients:PropTypes.array.isRequired
}

