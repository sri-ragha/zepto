import sys

path = '/Users/sriraghavardhinim/Downloads/zepto/index.html'
with open(path, 'r') as f:
    content = f.read()

start_str1 = '<!-- Designed Partners Section Replicating Header Graphic -->'
end_str1 = '<!-- Call to Action -->'

start_idx1 = content.find(start_str1)
end_idx1 = content.find(end_str1)

new_section1 = '''<!-- Skill Development Partners Graphic -->
            <div style="width: 100%; text-align: center; margin-bottom: 4rem; padding: 2rem; background: rgba(255,255,255,0.85); border-radius: 15px;">
                <img src="images/skill_development_partners.png" alt="Skill Development & Academia Partners" style="max-width: 100%; height: auto; display: inline-block;">
                <p style="color: #666; font-size: 0.85rem; margin-top: 10px;">(Please ensure the image you provided is saved as <code style="background: #e2e2e2; padding: 2px 4px; border-radius: 3px;">images/skill_development_partners.png</code> locally!)</p>
            </div>

            '''

start_str2 = '<!-- Provided Member & Partnered Image -->'
end_str2 = '</div>\n        </div>\n    </section>\n\n    <!-- 3. Vision & Strategic Pillars -->'

start_idx2 = content.find(start_str2)
end_idx2 = content.find(end_str2)

new_section2 = '''<!-- Provided Member & Partnered Image -->
                <img src="images/member_partnered.png" alt="Member & Partnered" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                <p style="color: #888; font-size: 0.85rem; margin-top: 10px;">(Please ensure the image you provided is saved as <code style="background: #e2e2e2; padding: 2px 4px; border-radius: 3px; color:#333;">images/member_partnered.png</code> locally!)</p>
            '''

if start_idx1 != -1 and end_idx1 != -1 and start_idx2 != -1 and end_idx2 != -1:
    # We must replace them in reverse order or update indices if doing simultaneously, 
    # but since start_idx2 (for evolution of zepto) is earlier in the file than start_idx1 (for skill div),
    # it's best to replace from bottom to top so indices stay valid.
    
    if start_idx1 > start_idx2:
        content = content[:start_idx1] + new_section1 + content[end_idx1:]
        content = content[:start_idx2] + new_section2 + content[end_idx2:]
    else:
        content = content[:start_idx2] + new_section2 + content[end_idx2:]
        content = content[:start_idx1] + new_section1 + content[end_idx1:]

    with open(path, 'w') as f:
        f.write(content)
    print("Replaced successfully.")
else:
    print(f"Indices not found! s1: {start_idx1}, e1: {end_idx1}, s2: {start_idx2}, e2: {end_idx2}")

