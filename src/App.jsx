import * as React from 'react'

const App = () => {
  const [food, setFood] = React.useState('fruit')
  const [drink, setDrink] = React.useState('water')

  const handleFoodChange = (event) => {
    setFood(event.target.value)
  }

  const handleDrinkChange = (event) => {
    setDrink(event.target.value)
  }

  return (
    <div>
      <Select
        label='What do we eat?'
        options={[
          { label: 'Fruit', value: 'fruit' },
          { label: 'Vegetable', value: 'vegetable' },
          { label: 'Meat', value: 'meat' }
        ]}
        value={food}
        onChange={handleFoodChange}
      />

      <Select
        label='What do we drink?'
        options={[
          { label: 'Water', value: 'water' },
          { label: 'Beer', value: 'beer' },
          { label: 'Wine', value: 'wine' }
        ]}
        value={drink}
        onChange={handleDrinkChange}
      />

      <p>We eat {food}!</p>
      <p>We drink {drink}!</p>
    </div>
  )
}

const Select = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default App
