import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import {Menu} from '../Menu/Menu';
import Logo from '../logo.svg';
import {Search} from '../../components';
import {useRouter} from "next/router";
import { JSX } from 'react';

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
    const router = useRouter();

    const handleClick = (event) => {
        event.preventDefault();
        router.push('/');
    };

    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <a onClick={handleClick}>
                <Logo className={styles.logo}/>
            </a>
            <Search/>
            <Menu/>
        </div>
    );
};