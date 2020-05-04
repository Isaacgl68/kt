import React, { Component } from 'react';
import Store from './store/Store'


import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "mdi-react/MenuIcon";
import PageLayoutSidebarIcon from "mdi-react/PageLayoutSidebarLeftIcon";
import "./app.scss"
import Drawer from "@material-ui/core/Drawer";
import AppModel from "./store/AppModel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import lightBlue from '@material-ui/core/colors/lightBlue';
import CatClass from "./components/hooks/CatClass";
import CatFunction from "./components/hooks/CatFunction";
import StateClass from "./components/hooks/StateClass";
import HooksDemo from "./components/hooks/HooksDemo";
import SideEffectClass from "./components/hooks/SideEffectClass";
import HooksReady from "./components/hooks/HooksReady";



export default class App extends Component {
	state = {
		toggleSideMenu:false,
		drawerNotOpenedYet:true,
		activeTab: 0,

	}

	constructor(props) {
		super(props);
		this.setToggleSideMenu = this.setToggleSideMenu.bind(this);
	}
	componentDidMount(){

	}

	handleTabChange = (event, activeTab) => {
		this.setState({ activeTab });
	};

	setToggleSideMenu()
	{
		this.setState({toggleSideMenu: !this.state.toggleSideMenu, drawerNotOpenedYet:false});
	}
	upload(){
		AppModel.upsertFlow();
	}
	render() {
		const toggleSideMenuColor = (this.state.toggleSideMenu)?'darkslategray':'inherit';
		const open = this.state.toggleSideMenu;
		const drawerPaper = (this.state.drawerNotOpenedYet)? 'drawerPaper' : 'drawerPaper drawerOpen';
		const drawer = (this.state.drawerNotOpenedYet) ? 'drawer ' : 'drawer drawerOpen';
		const {activeTab} = this.state;
		return <div className="root">

			<AppBar position="sticky" color="primary" className="appBar"  style={{backgroundColor: lightBlue["500"]}}
			>
				<Toolbar>
					<IconButton className="appMenuButton" color="inherit" aria-label="Menu">
						<MenuIcon />
					</IconButton>

					<Grid container direction="row"
								justify="flex-start"
								alignItems="center" >
					<Typography variant="h5" color="textPrimary" style={{marginRight:15}} >
						Are you on the hook?
					</Typography>
					<Tabs value={activeTab}  onChange={this.handleTabChange}>
						<Tab label="Welcome" />
						<Tab label="Class" />
						<Tab label="Function" />
						<Tab label="State Class" />
						<Tab label="Hooks Demo" />
						<Tab label="SideEffect Class" />
						<Tab label="Ready" />
					</Tabs>
					</Grid>
					<div className="grow"></div>

					<IconButton className="appMenuButton" color={toggleSideMenuColor} onClick={this.setToggleSideMenu} aria-label="sideManu">
						<PageLayoutSidebarIcon />
					</IconButton>
				</Toolbar>

			</AppBar>
			<Drawer
				className={drawer}
				variant="persistent"
				classes={{
					paper: drawerPaper,
				}}
				open={open}>
				<div/>
			</Drawer>
			{activeTab === 0 && <Grid container alignItems="center"justify="center">
				<Typography variant="h3" color="textPrimary" style={{margin:70}} >
				This is a work of fiction. Names, characters, businesses, places, events, locales,
				and incidents are either the products of the author’s imagination or used in a fictitious manner.
				Any resemblance to actual persons, living or dead, or actual events is purely coincidental.
			</Typography></Grid>}
			{activeTab === 1 && <CatClass rotate="0"/>}
			{activeTab === 2 && <CatFunction rotate="180" />}
			{activeTab === 3 &&  <StateClass/>}
			{activeTab === 4 &&  <HooksDemo/>}
			{activeTab === 5 &&  <SideEffectClass />}
			{activeTab === 6 &&  <HooksReady />}
		</div>
	}
}
