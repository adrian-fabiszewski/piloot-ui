import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import VideoPlayer from './video-player';

it('Video Player renders without crashing', () => {
  const rendered = renderer.create(<VideoPlayer />).toJSON();
  expect(rendered).toBeTruthy();
});

test('Video Player renders correctly', () => {
  const rendered = renderer.create(<VideoPlayer />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it('Video Player should render '
  + 'one text component and '
  + 'two view components and '
  + 'one WebView component', () => {
  const wrapper = shallow(<VideoPlayer />);
  expect(wrapper.find('#route-title').length).toEqual(1);
  expect(wrapper.find(View).length).toEqual(3);
  expect(wrapper.find('#route-video-player').length).toEqual(1);
});
