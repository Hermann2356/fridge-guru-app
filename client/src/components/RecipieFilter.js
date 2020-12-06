import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col } from 'reactstrap';
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Button,
	Row,
} from 'reactstrap';
import classnames from 'classnames';
import { TextField, Slider } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchSugesstion from './SearchSugesstion';
import '../components_stylesheets/RecipieFilter.css';

const tabs = ['Nutrient', 'Ingredient'];

const RecipieFilter = ({ searchText, handleFilter, label }) => {
	const [modal, setModal] = useState(false);
	const [activeTab, setActiveTab] = useState('Nutrient');

	const handleTabChange = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const [nutrients, setNutrients] = useState({
		minCalories: 0,
		maxCalories: 0,
		minFat: 0,
		maxFat: 0,
		minProtein: 0,
		maxProtein: 0,
		minCarbs: 0,
		maxCarbs: 0,
	});
	const [ingredients, setIngredients] = useState({
		time: [0, 60],
		ingredientsCount: [0, 10],
		includeIngredients: [],
		excludeIngredients: [],
		intolerances: [],
	});

	const updateNutrients = (key) => (event) => {
		let value = event.target.value;
		setNutrients({ ...nutrients, [key]: value });
	};

	const updateIngredients = (key, value) => {
		setIngredients({ ...ingredients, [key]: value });
	};


	const toggle = () => setModal(!modal);

	function valuetext(value) {
		return `${value}`;
	}

	const renderTabs = () => {
		return (
			<div>
				<Nav tabs>
					{tabs.map((tab) => (
						<NavItem>
							<NavLink
								className={classnames({ active: activeTab === tab })}
								onClick={() => {
									handleTabChange(tab);
								}}
							>
								{tab}
							</NavLink>
						</NavItem>
					))}
				</Nav>
				<TabContent activeTab={activeTab} className='max-height-60vh'>
					<TabPane tabId='Nutrient' className='pt-3'>
						<Row>
							{Object.keys(nutrients).map((item, index) => {
								return (
									<>
										{index % 2 === 0 && (
											<Col item sm={12} className='mt-3'>
												<p>{item.replace('min', '')}</p>
											</Col>
										)}
										<Col item sm={6}>
											<TextField
												type='number'
												placeholder='Min'
												size='small'
												variant='outlined'
												onChange={updateNutrients(item)}
												value={nutrients[item]}
											/>
										</Col>
									</>
								);
							})}
						</Row>
					</TabPane>
					<TabPane tabId='Ingredient' className='pt-3'>
						<Row>
							<Col item sm='12'>
								<Row className='justify-content-between ph-3'>
									<Col xs={12}>
										<p>0 minutes</p>
										<p>60+ minutes</p>
										<Slider
											value={ingredients.time}
											max={60}
											onChange={(e, value) => updateIngredients('time', value)}
											valueLabelDisplay='auto'
											aria-labelledby='Time'
											getAriaValueText={valuetext}
											style={{width: 'calc(100% - 26px)', padding: 13}}
										/>
									</Col>
								</Row>
							</Col>
							<Col item sm='12'>
								<Row className='justify-content-between ph-3'>
									<Col xs={12}>
										<p>0 ingredients</p>
										<p>10+ ingredients</p>
										<Slider
											value={ingredients.ingredients}
											max={10}
											onChange={(e, value) =>
												updateIngredients('ingredientsCount', value)
											}
											valueLabelDisplay='auto'
											aria-labelledby='Ingredients'
											getAriaValueText={valuetext}
											style={{width: 'calc(100% - 26px)', padding: 13}}
										/>
									</Col>
								</Row>
							</Col>
							<Col item sm='12'>
								<p>Include Ingredients</p>
								<SearchSugesstion
									data={ingredients.includeIngredients}
									id='includes'
									onChange={(value) =>
										updateIngredients('includeIngredients', value)
									}
								/>
							</Col>
							<Col item sm='12'>
								<p>Exclude Ingredients</p>
								<SearchSugesstion
									data={ingredients.excludeIngredients}
									id='excludes'
									onChange={(value) =>
										updateIngredients('excludeIngredients', value)
									}
								/>
							</Col>
							<Col item sm='12'>
								<p>Allergy Ingredients</p>
								<SearchSugesstion
									data={ingredients.intolerances}
									id='intolerances'
									onChange={(value) => updateIngredients('intolerances', value)}
								/>
							</Col>
						</Row>
					</TabPane>
				</TabContent>
			</div>
		);
	};

	return (
		<div>
			<Button onClick={toggle}>
				{' '}
				<FilterListIcon /> {label}
			</Button>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Filter Recipie</ModalHeader>
				<ModalBody>{renderTabs()}</ModalBody>
				<ModalFooter>
					<Button size='small' color='ghost' onClick={toggle}>
						Cancel
					</Button>
					<Button
						size='small'
						color='primary'
						onClick={() => {
							handleFilter({...ingredients, ...nutrients});
						}}
					>
						Filter
					</Button>{' '}
				</ModalFooter>
			</Modal>
		</div>
	);
};
export default RecipieFilter;
