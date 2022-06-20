import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Hover</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://revons.co'}
                        >
                            <h4>www.hover.gg</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Developers</h3>
                        <b>
                            <p>Summer 2020 - Fall 2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                        </p>
                    </li>
                    <li>
                        <p>
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                        </p>
                    </li>
                    <li>
                        <p>
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                        </p>
                    </li>
                    <li>
                        <p>
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                        </p>
                    </li>
                    <li>
                        <p>
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Revons Community</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://revons.co'}
                        >
                            <h4>www.bracs.co</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Team Lead & Cyber Security Developer</h3>
                        <b>
                            <p>2019</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                    ...........................................
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                        </p>
                    </li>
                    <li>
                        <p>
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                        </p>
                    </li>
                    <li>
                        <p>
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                        </p>
                    </li>
                    <li>
                        <p>
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Bluespacengineers</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'http://bluespacengineers.onion3'}
                        >
                            <h4>bluespacengineers.onion3</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Game Server Programmer</h3>
                        <b>
                            <p>Fall 2019, Summer 2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                            ...........................................
                </p>
                <br />
                <h3 style={styles.indent}>Screen Credits:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• Fayssal Chokri</p>
                        <p>
                            [{' '}
                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Fayssal Chokri</p>
                        <p>
                            [{' '}
                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Hightown</p>
                        <p>
                            [{' '}
                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                            >
                                STARZ
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Bull</p>
                        <p>
                            [{' '}
                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CBS
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• At Home</p>
                        <p>
                            [{' '}
                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                            >
                                truTV
                            </a>{' '}
                            ]
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
