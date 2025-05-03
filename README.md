
# Toastr.js

Toastr.js is a simple and customizable toast notification system for HTML, allowing you to display non-intrusive pop-up notifications with custom styling.

## Features

- Display toast notifications with custom icons and styles
- Easy to customize positioning, appearance, and behavior
- Supports different types of notifications: success, error, info, and warning
- Clear and close notifications programmatically
- Lightweight and responsive design

## Installation

Simply include the `toaster.js` and `toastr.css` files in your project.

```html
<!-- Include toastr.js -->
<script src="path/to/toaster.js"></script>

<!-- Include toastr.css -->
<link rel="stylesheet" href="path/to/toastr.css">
```

## Usage

Call the `toaster()` function to display a toast notification:

```js
toaster("This is an info message", "info");
toaster("This is a success message", "success");
toaster("This is an error message", "error");
toaster("This is a warning message", "warning");
```

### Parameters:

- `msg`: The message to be displayed in the toast.
- `ttype`: The type of toast (options: `info`, `success`, `error`, `warning`). Default is `info`.
- `opt`: Optional configuration object for customization (position, icon, UI classes, and more).

### Example with Custom Options:

```js
toaster("Custom styled message", "success", {
    position: "top-left", // Position of the toast (top-left, top-right, bottom-left, bottom-right)
    icon: "fa fa-check-circle", // Custom icon (FontAwesome)
    ui: "is-dark", // Custom UI class for additional styling
    clear: true // Clear existing toasts before showing new one
});
```

## Customization

- **Position**: You can customize where the toast will appear (top-right, bottom-right, top-left, bottom-left, etc.).
- **Icon**: Choose a custom icon for each toast, or use the default ones based on the toast type.
- **UI Classes**: Add custom classes for different UI themes, e.g., `is-dark` for dark mode.

## Contributing

Feel free to fork the repository and submit pull requests if you have improvements or fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
