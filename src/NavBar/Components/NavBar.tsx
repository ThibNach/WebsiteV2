import { Link }           from "react-router-dom";
import {
    NavBarBurgerProps,
    NavBarItemProps,
    NavBarItemsProps,
}                         from "../Schemas/NavBar.schema"
import { useNavBarItems } from "../Hooks/useNavBarItems";
import { useState }       from "react";
import {
    ErrorDiv,
    LoadingDiv,
}                         from "../../_Shared/Components/FetchDataComponents";

const NavBarTitle = (
    { title }:
    { title: string } ) => {
    return (
        <Link className="navbar-brand" to="/">{ title }</Link>
    );
}

const NavBarBurgerButton = (
    { navBarBurgerProps }:
    { navBarBurgerProps: NavBarBurgerProps } ) => {
    return (
        <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                type="button"
                onClick={ navBarBurgerProps.onClick }>{ navBarBurgerProps.title }
            <i className="fas fa-bars"></i>
        </button>
    );
};

const NavBarListItem = (
    { navBarItemProps }:
    { navBarItemProps: NavBarItemProps } ) => {
    return (
        <li className="nav-item mx-0 mx-lg-1">
            <Link className="nav-link py-3 px-0 px-lg-3 rounded"
                  to={ navBarItemProps.navBarItem.link }
                  onClick={ navBarItemProps.onClick }
            >{ navBarItemProps.navBarItem.title }
            </Link>
        </li>
    );
};

const NavBarList = (
    { navBarItemsProps }:
    { navBarItemsProps: NavBarItemsProps } ) => {
    return (
        <div className={ `collapse navbar-collapse ${ navBarItemsProps.isExpanded ? 'show' : '' }
         ` } id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
                { navBarItemsProps.Items.map( (
                                                  item,
                                                  index,
                                              ) => {
                    return (
                        <NavBarListItem key={ index }
                                        navBarItemProps={ {
                                            navBarItem: item,
                                            onClick: navBarItemsProps.onClick,
                                        } }
                        >
                        </NavBarListItem>
                    )
                } ) }
            </ul>
        </div>
    
    )
};

const NavBar = () => {
    
    const { navBarItems, loading, error } = useNavBarItems();
    const [ isExpanded, setExpanded ] = useState( false );
    
    if( loading ) {
        return <LoadingDiv/>;
    }
    
    if( error ) {
        return <ErrorDiv error={ error }/>;
    }
    
    return (
        <nav className={ "navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" } id={ "mainNav" }>
            <div className={ "container" }>
                <NavBarTitle title="Thibaut Spreux"/>
                <NavBarBurgerButton navBarBurgerProps={ {
                    title: "Menu",
                    onClick: () => setExpanded( !isExpanded ),
                } }/>
                <NavBarList navBarItemsProps={ {
                    Items: navBarItems,
                    isExpanded: isExpanded,
                    onClick: () => setExpanded( false ),
                } }></NavBarList>
            </div>
        </nav>
    );
}

export default NavBar;


