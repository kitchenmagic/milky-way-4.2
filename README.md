# Kitchen Magic: Milky Way (4.0)
[Staging Site](http://staging.kitchenmagic.com)

# Get Started
[Foundation Documentation](http://foundation.zurb.com/sites/docs/v/5.5.3/sass.html)
1. Make sure the following are installed:
    - Git ([Windows](https://git-scm.com/download/win)|[Mac](https://git-scm.com/download/mac)|[Linux](https://git-scm.com/download/linux) )
    - Node
    - Ruby
2. open terminal (ie. Git BASH)
3. CD into directory where you want to keep git repository
4. Clone Repo from GitHub: `git clone https://github.com/kitchenmagic/milky-way-4.2.git`
5. Install Foundation `gem install foundation` 
6. Get dependencies `bundle install`
7. Update Foundation `foundation update`





---
# STYLE
### SCSS / SASS
For use in scss/sass
- #### Variables
    + Layout
    + Color
        * White: `$white`
        * Primary: `$primary-color`
        * Secondary: `$secondary-color`
        * Tertiary: `$tertiary-color`
        * Info: `$info-color`
        * Warning: `$warning-color`
        * Alert: `$alert-color`
    + Layout
        * Row: `$row-width`
- #### Mixins
    + Alignment
        * **Center** `@include align-center;` <br/>
            *Output:*
            ``` css:
            margin-right: auto;
            margin-left: auto;
            ```

</br>

### CSS Classes
For use in HTML
- [Foundation](http://foundation.zurb.com/sites/docs/v/5.5.3/)
    + [Flex Video](http://foundation.zurb.com/sites/docs/v/5.5.3/components/flex_video.html) `.flex-video`
- Base
- Helper
    + Form
        * Hide Title: `.km-form-hide-title`
        * Hide Labels: `.km-form-hide-label`
        * Raw form: `km-form-frameless`
        * Center: `.km-form-center`
    + Layout
        * No Padding: `.km-padding-none`
        * No Margin: `.km-margin-none`
    + Header
        * Extra Padding under Top Bar `.km-top-bar-only`
- Layout
    + Full Width Row: add to template body css `.km-page-full-width` then add `.km-row` to rows you dont want full width
- Module
- Icon
    + Position (adds base styling and padding on appropriate side)
        * Center: `.km-icon`
        * Left: `.km-icon-left`
        * Right: `km-icon-right`
    + Name `.km-icon-[icon name]`
        * Phone: `phone`
        * Arrow: `arrow-[up | right | down | left ]`
        * Bullhorn: `bullhorn`
        * Money: `money`
        * 
    + 

<br>

---
# FUNCTIONALITY
- ## Foundation
    - Reveal Modal(Popup) [Documentation](http://foundation.zurb.com/sites/docs/v/5.5.3/components/reveal.html)
- ## jQuery

<br>

---
# HubSpot
- ## COS 
    + [Documentation](http://designers.hubspot.com/docs)
- ## Modules
    - ### Primary Navigation
        - Type: Advanced Menu
        - Advanced Menu Type: Static
        - Max Levels: 2
        - Orientation: Horizontal
        - Enable Flyouts: Enable Flyout
        - Menu: Default
+ Existing Modules
    * Pop-up CTA
        - Trigger `<a href="#" data-reveal-id="km-popup-cta">...</a>`

<br/>

---
# GitHub
## Git Commands
* `git config --[local or global] user.name "[name]"` Set username
* `git config --[local or global] user.email [email address]` Set e-mail address
* `git init` initialize git repository
* `git init “[project name]”` create new project & initialize git repository
* `git init -q “[project name]”`
* `git status` shows status of git
* `git add [filename]` adds file to list of changes to be committed
* `git add .` adds all files that have been changed in the working directory



Message:
---
`git push` 
> warning: push.default is unset; its implicit value has changed in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the traditional behavior, use:
>
> `git config --global push.default matching`
>
> To squelch this message and adopt the new behavior now, use:
>
> `git config --global push.default simple`
>
> When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.
>
> Since Git 2.0, Git defaults to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.
>
> See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)
<br/>

---


#Icons
---
###Library
[Font Awesome](https://fortawesome.github.io/Font-Awesome/)
`<i class="km-icon [icon class]"></i>`

###Icon Classes
- Menu: `km-icon-menu`
- Search: `km-icon-search`


#Info
Blackout z-index = 100,000




---
# Foundation Compass Template

The easiest way to get started with Foundation + Compass.

## Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`

## Quickstart

  * [Download this starter compass project and unzip it](https://github.com/zurb/foundation-compass-template/archive/master.zip)
  * Run `bower install` to install the latest version of Foundation
  
Then when you're working on your project, just run the following command:

```bash
bundle exec compass watch
```

## Upgrading

If you'd like to upgrade to a newer version of Foundation down the road just run:

```bash
bower update
```