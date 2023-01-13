import React, { FC } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import './styles.css';
import {
  DataAnalytics,
  Discord,
  Twitter,
  Wallet,
} from './icons';

const HomepageSection = (props) => {
  const toKebabCase = (header) =>
    header &&
    header
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      )
      .map((parts) => parts.toLowerCase())
      .join('-');
  return (
    <div className={clsx('homepage__section', props.className)}>
      <div className='homepage__container'>
        {props.header && (
          <h2 className='homepage__header' id={toKebabCase(props.header)}>
            {props.header}
          </h2>
        )}
        {props.description && (
          <p className='homepage__description'>{props.description}</p>
        )}
        {props.children}
      </div>
    </div>
  );
};

export default function HomeLayout() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline}>
      <div className='homepage'>
        <img src="./img/trickster-logo.png" alt="Trickster Logo" style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "35%", maxWidth: "550px" }} />
        <HomepageSection
          header='Trickster Network'
          description='A trickster is a character in a story who exhibits a great degree of intellect or secret knowledge and uses it to play tricks or otherwise disobey normal rules and defy conventional behavior.'
        >
          <div className='nodes__cards'>
            <div className='nodes__card'>
              <div className='nodes__icon'>
                <Discord />
              </div>
              <div className='nodes__section'>
                <h3 className='nodes__header'>COMMUNITY</h3>
                <ul className='nodes__features'>
                  <li className='nodes__feature'>
                    Exclusive alpha-focused DAO
                  </li>
                  <li className='nodes__feature'>
                    Governance & loyalty system
                  </li>
                  <li className='nodes__feature'>
                    Member validated information
                  </li>
                </ul>
                <Link
                  to='https://discord.trickster.network'
                  className='nodes__button button button--outline button--primary'
                >
                  JOIN US
                </Link>
              </div>
            </div>
            <div className='nodes__card'>
              <div className='nodes__icon'>
                <Twitter />
              </div>
              <div className='nodes__section'>
                <h3 className='nodes__header'>TWITTER</h3>
                <ul className='nodes__features'>
                  <li className='nodes__feature'>
                    Stay up to date
                  </li>
                  <li className='nodes__feature'>
                    Share some memes
                  </li>
                  <li className='nodes__feature'>
                    Engage in public discussions
                  </li>
                </ul>
                <Link
                  to='https://twitter.trickster.network'
                  className='nodes__button button button--outline button--primary'
                >
                  FOLLOW US
                </Link>
              </div>
            </div>
            <div className='nodes__card'>
              <div className='nodes__icon'>
                <Wallet />
              </div>
              <div className='nodes__section'>
                <h3 className='nodes__header'>WALLET MANAGER</h3>
                <ul className='nodes__features'>
                  <li className='nodes__feature'>
                    Multi-chain support
                  </li>
                  <li className='nodes__feature'>
                    Advanced autonomous features
                  </li>
                  <li className='nodes__feature'>
                    Open-source & modular design
                  </li>
                </ul>
                <Link
                  to='https://trickster.fi'
                  className='nodes__button button button--outline button--primary'
                >
                  COMING SOON
                </Link>
              </div>
            </div>
            <div className='nodes__card'>
              <div className='nodes__icon'>
                <DataAnalytics />
              </div>
              <div className='nodes__section'>
                <h3 className='nodes__header'>DATA ANALYTICS</h3>
                <ul className='nodes__features'>
                  <li className='nodes__feature'>
                    Blockchain & stock data analytics
                  </li>
                  <li className='nodes__feature'>
                    Crypto & financial news aggregator
                  </li>
                  <li className='nodes__feature'>
                    High performance API
                  </li>
                </ul>
                <Link
                  to='https://trickster.ai'
                  className='nodes__button button button--outline button--primary'
                >
                  COMING SOON
                </Link>
              </div>
            </div>

          </div>
        </HomepageSection>
      </div>
    </Layout>
  );
}
