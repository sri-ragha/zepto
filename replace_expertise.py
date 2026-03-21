import sys
path = '/Users/sriraghavardhinim/Downloads/zepto/index.html'
content = open(path).read()
start_str = '    <!-- 5. Spotlight On Zepto Expertise (Domains & Technologies) -->'
end_str = '    <!-- 6. Projects & Innovations (R&D Portfolio) -->'
start_idx = content.find(start_str)
end_idx = content.find(end_str)

new_section = '''    <!-- 5. Spotlight On Zepto Expertise (Domains & Technologies) -->
    <section class="section section-dark" id="expertise" style="position: relative; background: linear-gradient(180deg, #1A5B94 0%, #08111f 100%); overflow: hidden; padding: 4rem 0;">
        <div class="container" style="position: relative; z-index: 2; max-width: 1300px; text-align: center;">
            <h2 class="section-title text-center" style="color: #00CCFF; text-decoration: underline; text-underline-offset: 8px; font-style: italic; font-weight: 800; font-size: 2.5rem; text-shadow: 0 0 15px rgba(0, 204, 255, 0.4); margin-bottom: 3rem;">Spotlight On Zepto Expertise</h2>
            <img src="images/zepto_expertise_banner.png" alt="Spotlight On Zepto Expertise" style="max-width: 100%; height: auto; border: 1px solid rgba(0, 204, 255, 0.3); border-radius: 15px; box-shadow: 0 15px 40px rgba(0,0,0,0.4);">
        </div>
    </section>

'''

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + new_section + content[end_idx:]
    with open(path, 'w') as f:
        f.write(new_content)
    print("Replaced successfully.")
else:
    print(f"Error: start_idx={start_idx}, end_idx={end_idx}")
