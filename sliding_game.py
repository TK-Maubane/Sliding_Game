from tkinter import *
from tkinter import messagebox
from random import *

root = Tk()
root.title("My Sliding Game")


# Labeling buttons randomly
def btn_name(buttons):
    nums = [1, 2, 3, 4, 5, 6, 7, 8]
    for btn in buttons:
        sel = choice(nums)
        btn["text"] = str(sel)
        btn["bg"] = "dark green"
        btn['fg'] = 'white'
        nums.remove(sel)


# Slide function
def slide(button, blank):
    btn_row = button.grid_info()["row"]
    btn_column = button.grid_info()["column"]

    blank_row = blank.grid_info()["row"]
    blank_column = blank.grid_info()["column"]

    if btn_row == blank_row and abs(btn_column - blank_column) != 2 or \
       btn_column == blank_column and abs(btn_row - blank_row) != 2:

        button.grid(row=blank_row, column=blank_column)
        blank.grid(row=btn_row, column=btn_column)
    else:
        pass

    # Check for win
    # for btn in buttons:
    if (btn1["text"] == 1 and btn1["row"] == 0 and btn1["column"] == 0) and \
        btn2["text"] == 2 and btn2["row"] == 0 and btn2["column"] == 1 and \
        btn3["text"] == 3 and btn3["row"] == 0 and btn3["column"] == 2 and \
        btn4["text"] == 4 and btn4["row"] == 1 and btn4["column"] == 0 and \
        btn5["text"] == 5 and btn5["row"] == 1 and btn5["column"] == 1 and \
        btn6["text"] == 6 and btn6["row"] == 1 and btn6["column"] == 2 and \
        btn7["text"] == 7 and btn7["row"] == 2 and btn7["column"] == 0 and \
        btn8["text"] == 8 and btn8["row"] == 2 and btn8["column"] == 1:

        messagebox.showinfo(None, "Congratulations!\n You figured it out")


# Create buttons and buttons list
buttons = []
btn1 = Button(root, height=10, width=21, command=lambda: slide(btn1, btnX))
buttons.append(btn1)
btn2 = Button(root, height=10, width=21, command=lambda: slide(btn2, btnX))
buttons.append(btn2)
btn3 = Button(root, height=10, width=21, command=lambda: slide(btn3, btnX))
buttons.append(btn3)
btn4 = Button(root, height=10, width=21, command=lambda: slide(btn4, btnX))
buttons.append(btn4)
btn5 = Button(root, height=10, width=21, command=lambda: slide(btn5, btnX))
buttons.append(btn5)
btn6 = Button(root, height=10, width=21, command=lambda: slide(btn6, btnX))
buttons.append(btn6)
btn7 = Button(root, height=10, width=21, command=lambda: slide(btn7, btnX))
buttons.append(btn7)
btn8 = Button(root, height=10, width=21, command=lambda: slide(btn8, btnX))
buttons.append(btn8)
btnX = Button(root, height=10, width=21, state=DISABLED)

btn_name(buttons)
# Place buttons
btn1.grid(row=0, column=0)
btn2.grid(row=0, column=1)
btn3.grid(row=0, column=2)
btn4.grid(row=1, column=0)
btn5.grid(row=1, column=1)
btn6.grid(row=1, column=2)
btn7.grid(row=2, column=0)
btn8.grid(row=2, column=1)
btnX.grid(row=2, column=2)


root.mainloop()