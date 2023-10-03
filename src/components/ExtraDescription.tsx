import type { Component } from "solid-js";

export const ExtraDescription: Component = () => {
    return (
        <div class="extra-description">
            <h2>Still not sold? Here's what Kanri has to offer</h2>
            <p>Kanri is one of the few fully offline Kanban board apps which is designed to cater to your personal needs, making it ideal for solo developers, students, and anyone seeking a well-organized task management solution to streamline your tasks and boost productivity.</p>
            
            <h3>Familiar Kanban method</h3>
            Kanri makes use of the popular Kanban method used in areas like software-development to organize tasks, using boards, cards and columns, just like it can be found in other apps like Trello™ or Jira™. Here's how it works:
            <div class="kanban-cards-row">
                <div class="kanban-info-card">
                    <span>Boards</span>
                    <p>Each board represents a project or bigger tasks and is the highest level of visual structure in the Kanban method. For example, you can have boards for things such as "Website redesign project" or "School assignments". Kanri allows you to create unlimited boards for free, providing you with full freedom to organize your projects as you please. Thumbnails on the home page allow you to peek into the general layout of your boards and quickly rename or delete boards. </p>
                </div>
                <div class="kanban-info-card">
                    <span>Columns</span>
                    <p>Columns are the equivalent of categories for your tasks. They allow you to look at all of your tasks, group them and visualize the different stages of your project at all times. The most common categories which Kanri also ships with all new board are "Todo", "In progress" or "Doing" and "Done".</p>
                </div>
                <div class="kanban-info-card">
                    <span>Cards</span>
                    <p>One card represents one granular task on a Kanban board. This can be something like "change main button color from red to blue". Each card can have this primary name, an extended description, sub-tasks for a checklist of related tasks or extended steps and a custom color to indicate things like status or a category. </p>
                </div>
            </div>
        </div>
    )
}