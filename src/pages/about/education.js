import React from 'react';
import './index.css';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import { PiNotebook } from 'react-icons/pi';

const educationData = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Institute of Engineering and Science, IPS Academy',
    location: 'Indore, Madhya Pradesh',
    score: '8.8/10',
    duration: '2021–2025',
    description: 'Focusing on AI and ML with strong academic performance',
  },
  {
    degree: 'Senior Secondary (12th)',
    institution: 'Govt. Multi-Purpose H. S. Excellence School',
    location: 'Betul, Madhya Pradesh',
    score: '82.6%',
    duration: '2020',
    description: 'State Board examination with science specialization',
  },
  {
    degree: 'High School (10th)',
    institution: 'Govt. Multi-Purpose H. S. Excellence School',
    location: 'Betul, Madhya Pradesh',
    score: '92.6%',
    duration: '2018',
    description: 'State Board examination with excellent academic performance',
  },
];

const Education = () => {
  return React.createElement(
    'div',
    { className: 'education-container' },
    [
      React.createElement(
        'h2',
        { className: 'education-title', key: 'title' },
        [
          React.createElement(FaGraduationCap, { className: 'education-icon', key: 'icon' }),
          'Education',
        ]
      ),
      React.createElement(
        'div',
        { className: 'education-timeline', key: 'timeline' },
        educationData.map((edu, index) =>
          React.createElement(
            'div',
            { className: 'education-entry', key: index },
            [
              React.createElement('div', { className: 'timeline-dot', key: 'dot' }),
              React.createElement(
                'div',
                { className: 'education-content', key: 'content' },
                [
                  React.createElement(
                    'div',
                    { className: 'education-header', key: 'header' },
                    [
                      React.createElement('h3', { className: 'degree', key: 'degree' }, edu.degree),
                      React.createElement('span', { className: 'duration-badge', key: 'duration' }, edu.duration)
                    ]
                  ),
                  React.createElement('p', { className: 'institution', key: 'institution' }, edu.institution),
                  React.createElement(
                    'div',
                    { className: 'edu-meta', key: 'meta' },
                    [
                      React.createElement(
                        'span',
                        { key: 'location' },
                        [
                          React.createElement(FaMapMarkerAlt, { key: 'mapIcon' }),
                          ' ',
                          edu.location
                        ]
                      ),
                      React.createElement(
                        'span',
                        { key: 'score' },
                        [
                          React.createElement(PiNotebook, { key: 'notebookIcon' }),
                          ' ',
                          edu.score
                        ]
                      )
                    ]
                  ),
                  React.createElement('p', { className: 'edu-description', key: 'desc' }, edu.description)
                ]
              )
            ]
          )
        )
      )
    ]
  );
};

export default Education;
