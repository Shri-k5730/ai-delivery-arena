"""Compiled React shell mounted through Streamlit Components v2."""

from __future__ import annotations

from importlib.resources import files
from typing import Any

import streamlit as st


def _inline_asset(pattern: str) -> str:
    directory = files("ai_delivery_arena.react_ui").joinpath("frontend/build")
    matches = tuple(item for item in directory.iterdir() if item.match(pattern))
    if len(matches) != 1:
        raise RuntimeError(
            f"React build must contain exactly one {pattern} asset; found {len(matches)}"
        )
    # Vite minifies each asset to one line. An internal newline explicitly marks
    # this as inline component content instead of a file path to Streamlit.
    prefix = (
        "/* inline component */\n"
        if pattern.endswith(".css")
        else "// inline component\n"
    )
    return prefix + matches[0].read_text(encoding="utf-8")


_component = st.components.v2.component(
    "arena_react_product",
    html='<div class="arena-react-root"></div>',
    js=_inline_asset("index-*.js"),
    css=_inline_asset("index-*.css"),
    isolate_styles=False,
)


def arena_shell(data: dict[str, Any], *, key: str) -> Any:
    return _component(
        key=key,
        data=data,
        on_event_change=lambda: None,
        width="stretch",
    )


__all__ = ["arena_shell"]
