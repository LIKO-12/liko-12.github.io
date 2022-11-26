import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Create retro-looking games',
    Svg: require('../../static/img/homepage/liko-apple.svg').default,
    description: (
      <>
        For a fantasy system with a low resolution of 192x128
        and limited to a colors palette of 16 colors.
      </>
    ),
  },
  {
    title: 'Share your games with others',
    Svg: require('../../static/img/homepage/liko-disk.svg').default,
    description: (
      <>
        By sending them an image looks like a disk,
        but also magically contains your game.
      </>
    ),
  },
  {
    title: 'Available on multiple platforms',
    platformsSpecial: true,
    description: (
      <>
        Developed on Windows and supports Linux.
        Experimental support for Android and macOS is also available.
      </>
    ),
  },
  {
    title: 'Code in Lua',
    Svg: require('../../static/img/homepage/lua-logo.svg').default,
    description: (
      <>
        An easy to learn programming language.
      </>
    ),
  },
  {
    title: 'Open-source',
    Svg: require('../../static/img/homepage/github-icon.svg').default,
    description: (
      <>
        You can look into the code that makes it work and even hack it to do new things!
      </>
    ),
  },
];

function Platforms() {
  const Windows = require('../../static/img/homepage/windows.svg').default;
  const Linux = require('../../static/img/homepage/tux.svg').default;
  const Android = require('../../static/img/homepage/android.svg').default;

  return <div className={styles.featurePlatforms}>
    <Windows className={styles.featurePlatform} alt='Windows' />
    <Android className={styles.featurePlatform} alt='Android' />
    <Linux className={styles.featurePlatform} alt='Linux' />
  </div>;
}

function Feature({ Svg, platformsSpecial, title, description }) {
  return (
    <div className={clsx('col col--4')}>

      {platformsSpecial ? <Platforms /> : <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>}

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
