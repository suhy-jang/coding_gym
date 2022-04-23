"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language: https://en.wikipedia.org/wiki/Guido_van_Rossum
"""

EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2


def bake_time_remaining(elapsed_bake_time: int) -> int:
    """Returns the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time


def preparation_time_in_minutes(layers: int) -> int:
    """Returns the preparation time in minutes.

    :param layers: int - layer count.
    :return: int - preparation time (in minutes) derived from 'PREPARATION_TIME'.

    Function that takes the minutes the lasagna has been prepared with layers of cooking as
    an argument and returns how many minutes the lasagna takes to be prepared
    based on the `PREPARATION_TIME`.
    """
    return layers * PREPARATION_TIME


def elapsed_time_in_minutes(layers: int, cooking_time: int) -> int:
    """Returns the elapsed time in minutes.

    :param layers: int - layer count.
    :param cooking_time: int - cooking time.
    :return: int - elapsed time (in minutes).

    Function that takes the minutes the lasagna has been prepared with layers of cooking, and 
    cooking time that taken during the baking as arguments 
    and returns how many minutes the lasagna takes to be elapsed to cook.
    """
    return preparation_time_in_minutes(layers) + cooking_time
