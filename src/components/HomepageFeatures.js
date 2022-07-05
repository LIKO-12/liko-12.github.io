import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Code in Lua',
    Svg: require('../../static/img/placeholder.svg').default,
    description: (
      <>
        An easy to learn scripting language.
      </>
    ),
  },
  {
    title: 'Written in Lua',
    Svg: require('../../static/img/placeholder.svg').default,
    description: (
      <>
        The same language you use in the application is used to write the application itself.
        This opens the opportunity to hack the application.
      </>
    ),
  },
  {
    title: 'Available on multiple platforms',
    Svg: require('../../static/img/placeholder.svg').default,
    description: (
      <>
        Developed on Windows and supports Linux.
        Experimental supports for Android and macOS is also available.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
