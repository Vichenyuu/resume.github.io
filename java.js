document.addEventListener('DOMContentLoaded', function() {
    // 获取留言表单和留言列表
    const messageForm = document.querySelector('.messageForm');
    const messageList = document.getElementById('messageList');

    // 监听表单提交事件
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单默认提交行为

        // 获取表单中的姓名、邮箱和留言内容
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email'); // 新增获取邮箱输入字段
        const messageInput = document.getElementById('message');
        const name = nameInput.value.trim();
        const email = emailInput.value.trim(); // 新增获取邮箱值
        const message = messageInput.value.trim();

        // 检查输入是否为空
        if (name === '' || email === '' || message === '') { // 修改检查条件
            alert('请填写姓名、邮箱和留言内容');
            return;
        }

        // 创建新的留言项
        const li = document.createElement('li');

        // 创建留言内容的HTML结构，包含删除按钮
        const messageContent = `
            <strong>${name}:</strong>
            <p>${email}</p> <!-- 新增邮箱内容输出 -->
            <p>${message}</p>
            <button class="deleteButton" type="button">删除</button>
        `;

        // 将留言内容添加到li元素中
        li.innerHTML = messageContent;

        // 将新的留言项添加到留言列表中
        messageList.appendChild(li);

        // 为删除按钮添加事件监听器
        const deleteButton = li.querySelector('.deleteButton');
        deleteButton.addEventListener('click', function() {
            messageList.removeChild(li);
        });

        // 清空表单输入
        nameInput.value = '';
        emailInput.value = ''; // 新增清空邮箱输入
        messageInput.value = '';
    });
});
