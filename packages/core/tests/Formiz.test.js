import React from 'react';
import { mount } from 'enzyme';
import { Input } from './utils';
import { Formiz } from '../src';

beforeEach(() => {
  jest.resetModules();
});

describe('<Formiz />', () => {
  it('Should mount without crashing', () => {
    mount(
      <Formiz>
        My Form
      </Formiz>
    );
  });

  it('Should mount fields without crashing', () => {
    mount(
      <Formiz>
        <Input name="field" />
        <Input name="field2" />
      </Formiz>
    );
  });

  it('Should mount 2 separated `<Formiz>` without crashing', () => {
    mount(
      <div>
        <Formiz>
          <Input name="field" />
          <Input name="field2" />
        </Formiz>
        <Formiz>
          <Input name="field" />
          <Input name="field2" />
        </Formiz>
      </div>
    );
  });

  it('Should be valid if all fields are valid', () => {
    let isFormValid = true;
    const mockValid = jest.fn(() => { isFormValid = true; });
    const mockInvalid = jest.fn(() => { isFormValid = false; });

    const form = mount(
      <Formiz onValid={mockValid} onInvalid={mockInvalid}>
        <Input
          name="field"
          validations={[
            {
              rule: x => !!x,
            },
          ]}
        />
        <Input name="field2" />
      </Formiz>
    );

    expect(isFormValid).toBe(false);

    const input = form.find('input').first();
    input.simulate('change', { target: { value: 'New value' } });

    expect(isFormValid).toBe(true);
  });

  it('Should be invalid if one field is invalid', () => {
    let isFormValid = true;
    const mockValid = jest.fn(() => { isFormValid = true; });
    const mockInvalid = jest.fn(() => { isFormValid = false; });

    mount(
      <Formiz onValid={mockValid} onInvalid={mockInvalid}>
        <Input
          name="field"
          validations={[
            {
              rule: x => !!x,
            },
          ]}
        />
        <Input name="field2" />
      </Formiz>
    );

    expect(isFormValid).toBe(false);
  });

  it('Should get form values onSubmit', () => {
    let formValues = null;
    const mockSubmit = jest.fn((values) => { formValues = values; });

    const form = mount(
      <Formiz onSubmit={mockSubmit}>
        <Input
          name="field"
        />
        <Input name="field2" defaultValue="Value 2" />
      </Formiz>
    );

    expect(mockSubmit.mock.calls.length).toBe(0);
    expect(formValues).toBe(null);

    form.simulate('submit');

    expect(mockSubmit.mock.calls.length).toBe(1);
    expect(formValues).toHaveProperty('field', null);
    expect(formValues).toHaveProperty('field2', 'Value 2');
  });

  it('Should get form values onChange', () => {
    let formValues = null;

    const form = mount(
      <Formiz onChange={(values) => { formValues = values; }}>
        <Input
          name="field"
        />
        <Input name="field2" defaultValue="Value 2" />
      </Formiz>
    );

    const input = form.find('input').first();
    input.simulate('change', { target: { value: 'New value' } });

    expect(formValues).toHaveProperty('field', 'New value');
    expect(formValues).toHaveProperty('field2', 'Value 2');
  });
});
