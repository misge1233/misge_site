# 📝 How to Add Blog Posts

This guide explains how to add new blog posts to your portfolio website.

## Current Structure

Your blog uses **static HTML files**, which means each blog post is a separate HTML file. This is simple and works great with GitHub Pages!

## Steps to Add a New Blog Post

### Step 1: Create a New Blog Post File

1. **Copy the template**: Copy `blog-post.html` and rename it to something descriptive
   - Example: `blog-rag-systems.html` or `blog-deployment-strategies.html`
   - Use lowercase, hyphens, and no spaces

2. **Edit the content** in your new file:
   - Update the `<title>` tag
   - Update the `<meta>` description and keywords
   - Change the blog post title (inside `<h1>`)
   - Update the date in "Published on..."
   - Write your content in the `.blog-post-content` section

### Step 2: Add Entry to Blog Listing

1. Open `blog.html`
2. Find the `<div class="blog-grid">` section
3. Add a new `<article class="blog-card">` **at the top** (newest posts first):

```html
<!-- Your New Blog Post -->
<article class="blog-card">
    <div class="blog-image">🚀</div>  <!-- Choose an emoji or use an image -->
    <div class="blog-content">
        <p class="blog-date">December 15, 2024</p>
        <h3 class="blog-title">Your Blog Post Title Here</h3>
        <p class="blog-excerpt">
            A brief summary of your blog post (2-3 sentences). This appears on the blog listing page.
        </p>
        <a href="your-blog-post-file.html" class="btn btn-outline" style="margin-top: 1rem;">Read More</a>
    </div>
</article>
```

### Step 3: Test Locally

1. Make sure your server is running: `python -m http.server 8000`
2. Visit `http://localhost:8000/blog.html` to see your new post
3. Click the "Read More" button to test the full post page

### Step 4: Deploy

```bash
git add .
git commit -m "Add new blog post: [Post Title]"
git push origin main
```

Your new post will be live in 1-2 minutes!

---

## Example: Adding a Real Blog Post

Let's say you want to add a post called "Building My First ML Model":

### 1. Create the file: `blog-first-ml-model.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn how I built my first machine learning model from scratch">
    <meta name="keywords" content="Machine Learning, Python, Tutorial, First ML Model">
    <meta name="author" content="Misganu Tuse">
    <title>Building My First ML Model - Portfolio | AI Engineer</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="assets/css/style.css">
    
    <!-- [Copy the <style> section from blog-post.html] -->
</head>
<body>
    <!-- Navbar Placeholder -->
    <div id="navbar-placeholder"></div>

    <!-- Blog Post Content -->
    <section class="section" style="padding-top: 8rem;">
        <div class="blog-post-container">
            <div class="blog-post-header">
                <a href="blog.html" style="color: var(--primary-color); margin-bottom: 1rem; display: inline-block;">← Back to Blog</a>
                <h1>Building My First ML Model</h1>
                <div class="blog-post-meta">
                    Published on December 15, 2024 | 8 min read
                </div>
            </div>

            <div class="blog-post-content">
                <p>
                    In this post, I'll share my journey building my first machine learning model...
                </p>

                <h2>Getting Started</h2>
                <p>
                    Your content here...
                </p>

                <!-- Add more sections as needed -->
            </div>

            <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--bg-gray);">
                <a href="blog.html" class="btn btn-outline">← Back to All Posts</a>
            </div>
        </div>
    </section>

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>

    <!-- Main JavaScript -->
    <script type="module" src="assets/js/main.js"></script>
</body>
</html>
```

### 2. Add to `blog.html`:

```html
<!-- Blog Post: Building My First ML Model -->
<article class="blog-card">
    <div class="blog-image">🤖</div>
    <div class="blog-content">
        <p class="blog-date">December 15, 2024</p>
        <h3 class="blog-title">Building My First ML Model</h3>
        <p class="blog-excerpt">
            Learn how I built my first machine learning model from scratch. This tutorial covers 
            everything from data preparation to model deployment.
        </p>
        <a href="blog-first-ml-model.html" class="btn btn-outline" style="margin-top: 1rem;">Read More</a>
    </div>
</article>

<!-- Existing posts below... -->
```

---

## Tips for Writing Blog Posts

1. **Use Images**: Replace emoji placeholders with actual images if you have them
   ```html
   <div class="blog-image" style="background-image: url('assets/images/blog-image.jpg'); background-size: cover;"></div>
   ```

2. **Code Blocks**: Use `<pre><code>` for code snippets (already styled!)

3. **Headers**: Use `<h2>` for main sections, `<h3>` for subsections

4. **Lists**: Use `<ul>` or `<ol>` for lists (already styled)

5. **Quotes**: Use `<blockquote>` for important quotes

6. **Read Time**: Estimate reading time (roughly 200-250 words per minute)

---

## Alternative: Using Markdown (Advanced)

If you prefer writing in Markdown, you can:

1. Write your post in Markdown (`.md` file)
2. Convert it to HTML using tools like:
   - [Pandoc](https://pandoc.org/)
   - Online converters
   - VS Code extensions with Markdown preview
3. Copy the HTML output into your blog post template

---

## Quick Reference

- **Blog listing**: `blog.html`
- **Blog post template**: `blog-post.html`
- **New post location**: Root directory (same folder as `blog.html`)
- **Naming convention**: `blog-your-post-title.html` (lowercase, hyphens)

---

## Need Help?

- Check `blog-post.html` for the template structure
- Look at existing posts in `blog.html` for examples
- All styling is already done - just add your content!

Happy blogging! 🚀

