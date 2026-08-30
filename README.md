# OTP - One-Time Password Input Component

A React OTP input component for entering verification codes. Features auto-focus, input validation, and customizable styling.

## Features

- One-time password input
- Auto-focus between inputs
- Input validation
- Customizable styling
- Copy/paste support
- Keyboard navigation
- Responsive design

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jewel-190237/otp.git
   ```

2. Copy `otp.tsx` and `global.css` into your project

3. Import and use the component:
   ```tsx
   import OTP from './otp';

   function App() {
     return (
       <OTP
         length={6}
         onComplete={(otp) => console.log('OTP:', otp)}
       />
     );
   }
   ```

## Usage

### Basic Usage
```tsx
import OTP from './otp';

function App() {
  const handleComplete = (otp: string) => {
    console.log('Entered OTP:', otp);
    // Verify OTP with your backend
  };

  return (
    <OTP
      length={6}
      onComplete={handleComplete}
    />
  );
}
```

### Custom Length
```tsx
<OTP length={4} onComplete={handleComplete} />
<OTP length={8} onComplete={handleComplete} />
```

### Custom Styling
```css
/* Override default styles */
.otp-input {
  width: 40px;
  height: 40px;
  border: 2px solid #ccc;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
}

.otp-input:focus {
  border-color: #007bff;
  outline: none;
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| length | number | 6 | Number of OTP digits |
| onComplete | function | - | Callback when all digits are entered |
| autoFocus | boolean | true | Auto-focus first input |

## Features in Detail

### Auto-Focus
- Automatically moves to next input on entry
- Moves back on backspace
- Focuses first empty input

### Input Validation
- Only allows numeric input
- Prevents invalid characters
- Handles paste events

### Keyboard Navigation
- Tab to move between inputs
- Backspace to delete and move back
- Enter to submit

## Author

**Jewel-190237**
- GitHub: [Jewel-190237](https://github.com/Jewel-190237)
- Email: jewel190237@gmail.com

## Contributing

Feel free to fork this project and create pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).
