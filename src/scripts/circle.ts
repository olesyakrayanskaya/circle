import type { TDataSourceFunc } from "./dataSourse";
import { initSwiper } from '../scripts/swiper';
import { dateIncrementAnimation } from '../scripts/periods';

function createWidget(widgetId: string, dataSourse: TDataSourceFunc): HTMLElement {

    let displayData = dataSourse();

    const container = document.querySelector('.container');
    let widget = document.querySelector(`#${widgetId}`) as HTMLElement;
    if (widget) {
        console.log('error');
        return widget;
    }
    widget = document.createElement('section');
    widget.className = 'dates-widget';
    widget.setAttribute('id', widgetId);
    container.append(widget);

    let dates = document.createElement('div');
    dates.className = 'dates';
    widget.append(dates);

    let title = document.createElement('h2');
    title.className = 'dates__title';
    title.innerHTML = 'Исторические</br>даты'
    dates.append(title);

    let period = document.createElement('h1');
    period.className = 'dates__period';
    dates.append(period);

    let start = document.createElement('span');
    start.className = 'start';
    start.innerHTML = displayData[0].start.toString();
    period.append(start);

    let end = document.createElement('span');
    end.className = 'end';
    end.innerHTML = displayData[0].end.toString();
    period.append(end);

    let circle = document.createElement('div');
    circle.className = 'dates__circle';
    dates.append(circle);

    for (let i = 0; i < displayData.length; i++) {
        let point = document.createElement('div');
        point.className = 'dates__point';
        if (i === 0) {
            point.classList.add('dates__point_active');
        }
        point.setAttribute('data-index', i.toString());
        let pointNum = document.createElement('span');
        pointNum.className = 'dates__item-num';
        pointNum.innerHTML = (i + 1).toString();
        point.append(pointNum);
        circle.append(point);
    }

    let infoTitle = document.createElement('span');
    infoTitle.className = 'dates__info-title';
    infoTitle.classList.add('dates__info-title_active');
    infoTitle.innerHTML = displayData[0].title;
    dates.append(infoTitle);

    let datesPagination = document.createElement('div');
    datesPagination.className = 'dates__pagination';
    dates.append(datesPagination);

    let datesNum = document.createElement('div');
    datesNum.classList = 'dates__num';
    datesNum.innerHTML = `01/0${displayData.length}`;
    datesPagination.append(datesNum);

    let datesActions = document.createElement('div');
    datesActions.classList = 'dates__actions';
    datesPagination.append(datesActions);

    let datesBullets = document.createElement('div');
    datesBullets.classList = 'dates__bullets';
    datesActions.append(datesBullets);

    for (let i = 0; i < displayData.length; i++) {
        let datesBullet = document.createElement('span');
        datesBullet.className = 'dates__bullet';
        datesBullets.append(datesBullet);
    }

    let datesBtns = document.createElement('div');
    datesBtns.className = 'dates__btns';
    datesActions.append(datesBtns);

    let btnPrev = document.createElement('button');
    btnPrev.className = 'dates__btn dates__btn_prev';
    btnPrev.innerHTML = `<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.66418 0.707108L1.41419 6.95711L7.66418 13.2071" stroke="#42567A" stroke-width="2" />
                        </svg>`;
    datesBtns.append(btnPrev);

    let btnNext = document.createElement('button');
    btnNext.className = 'dates__btn dates__btn_next';
    btnNext.innerHTML = `<svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.707092 0.707108L6.95709 6.95711L0.707093 13.2071" stroke="#42567A"
                                        stroke-width="2" />
                        </svg>`;
    datesBtns.append(btnNext);

    for (let i = 0; i < displayData.length; i++) {
        let infoSwiper = document.createElement('div');
        infoSwiper.className = `${widgetId}-info-${i + 1} info swiper`;
        if (i !== 0) {
            infoSwiper.classList.add('hidden');
        }
        infoSwiper.classList.add(`${widgetId}-info-swiper`);

        let infoSwiperWrapper = document.createElement('div');
        infoSwiperWrapper.className = `info__inner swiper-wrapper`;

        for (let j = 0; j < displayData[i].events.length; j++) {
            let infoSlide = document.createElement('div');
            infoSlide.className = 'info__slide swiper-slide';

            let infoSlideTitle = document.createElement('h3');
            infoSlideTitle.className = 'info__title';
            infoSlideTitle.innerHTML = displayData[i].events[j].year.toString();
            infoSlide.append(infoSlideTitle);

            let infoSlideText = document.createElement('p');
            infoSlideText.className = 'info__text';
            infoSlideText.innerHTML = displayData[i].events[j].text;
            infoSlide.append(infoSlideText);

            infoSwiperWrapper.append(infoSlide);
        }

        infoSwiper.append(infoSwiperWrapper);

        let infoSwiperBtnPrev = document.createElement('button');
        infoSwiperBtnPrev.className = `${widgetId}-info-${i + 1}__btn_prev info__btn info__btn_prev`;
        infoSwiperBtnPrev.innerHTML = `<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M0.707093 0.707092L5.70709 5.70709L0.707093 10.7071" stroke="#3877EE" stroke-width="2"
                                         transform="scale(-1, 1) translate(-8, 0)" />
                                       </svg>`;

        infoSwiper.append(infoSwiperBtnPrev);

        let infoSwiperBtnNext = document.createElement('button');
        infoSwiperBtnNext.className = `${widgetId}-info-${i + 1}__btn_next info__btn info__btn_next`;
        infoSwiperBtnNext.innerHTML = `<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M0.707093 0.707092L5.70709 5.70709L0.707093 10.7071" stroke="#3877EE"
                                         stroke-width="2" />
                                      </svg>`;

        infoSwiper.append(infoSwiperBtnNext);

        widget.append(infoSwiper);
        initSwiper(`.${widgetId}-info-${i + 1}`);
    }

    return widget;
}

export function createDateCircle(widgetId: string, dataSourse: TDataSourceFunc) {
    let data = dataSourse();

    interface CircleVariables {
        itemCount: number;
        radius: string;
        angShift?: number;
        transitionTime?: number;
    }

    const variables: CircleVariables = {
        itemCount: 6,
        radius: '265px',
        angShift: 60,
        transitionTime: 0.4,
    };

    const datesWidget: HTMLElement = createWidget(widgetId, dataSourse);
    const nextBtn: HTMLElement | null = datesWidget.querySelector('.dates__btn_next');
    const prevBtn: HTMLElement | null = datesWidget.querySelector('.dates__btn_prev');

    function setupCirclePoints(points: HTMLElement[]): void {

        const angleStep = 360 / variables.itemCount;
        const pointElements = datesWidget.querySelectorAll<HTMLElement>('.dates__point');
        const pointsArray = Array.from(pointElements);

        points.forEach((point, index) => {
            const angleDeg = (index - 1) * angleStep;
            point.style.transform =
                `rotate(${angleDeg}deg) translate(${variables.radius}) rotate(${-1 * angleDeg}deg)`;
            point.setAttribute('data-ang', angleDeg.toString());
            point.setAttribute('data-ang-step', index.toString());
            point.addEventListener('transitionstart', () => {
                datesWidget.setAttribute('isAnimated', 'true');
            })
            point.addEventListener('transitionend', (event) => {

                let step = Number(point.getAttribute('data-ang-step'));
                if (step % variables.itemCount === 0) {
                    point.classList.add('dates__point_active');
                } else {
                    point.classList.remove('dates__point_active');
                }
                point.style.transition = null;

                if (event.propertyName === 'height') {
                    datesWidget.setAttribute('isAnimated', 'false');
                    const infoTitle: HTMLElement | null = datesWidget.querySelector('.dates__info-title');
                    const currentData = data[Number(point.getAttribute('data-index'))];
                    let step = Number(point.getAttribute('data-ang-step'));
                    step = ((step % variables.itemCount) + variables.itemCount) % variables.itemCount;

                    if (step === 0) {
                        infoTitle.innerHTML = currentData.title ? currentData.title : '';

                        const dataIndex = Number(point.getAttribute('data-index'));
                        const sl = datesWidget.querySelector(`.${widgetId}-info-${dataIndex + 1}`);
                        sl.classList.remove('hidden');
                    }
                }

                if (event.propertyName === 'transform') {
                    const infoTitle: HTMLElement | null = datesWidget.querySelector('.dates__info-title');
                    infoTitle.classList.add('dates__info-title_active');
                }
            })
            point.addEventListener('click', () => {
                let step = Number(point.getAttribute('data-ang-step'));
                step = ((step % variables.itemCount) + variables.itemCount) % variables.itemCount;
                if (step) {
                    let fwd = variables.itemCount - step;
                    if (fwd > step) {
                        rotateCirclePoints(pointsArray, step * (-1));
                    } else {
                        rotateCirclePoints(pointsArray, fwd);
                    }
                }
            })
        });
    }

    function initializePoints(): void {
        const pointElements = document.querySelectorAll<HTMLElement>('.dates__point');
        const pointsArray = Array.from(pointElements);

        setupCirclePoints(pointsArray);
    }

    document.addEventListener('DOMContentLoaded', initializePoints);

    function rotateCirclePoints(points: HTMLElement[], steps: number): void {



        const infoTitle: HTMLElement | null = datesWidget.querySelector('.dates__info-title');
        infoTitle.innerHTML = '';

        const sliders = datesWidget.querySelectorAll(`.${widgetId}-info-swiper`);
        sliders.forEach(slider => {
            slider.classList.add('hidden');
        })

        const angleStep = 360 / variables.itemCount;

        if (datesWidget.getAttribute('isAnimated') === 'true') {
            return;
        };

        points.forEach((point) => {
            let style = window.getComputedStyle(point, null).getPropertyValue('transition');
            const dataAngStep = Number(point.getAttribute('data-ang-step'));
            const angleDeg = (dataAngStep + steps - 1) * angleStep;
            point.style.transform =
                `rotate(${angleDeg}deg) translate(${variables.radius}) rotate(${-1 * angleDeg}deg)`;
            point.style.transition =
                `transform ${variables.transitionTime}s linear`;
            point.setAttribute('data-ang', angleDeg.toString());
            point.setAttribute('data-ang-step', (dataAngStep + steps).toString());
            if ((dataAngStep + steps) % variables.itemCount === 0) {
                const currentData = data[Number(point.getAttribute('data-index'))];

                const periodsNum = datesWidget.querySelector('.dates__num');
                periodsNum.innerHTML = `0${Number(point.getAttribute('data-index')) + 1}/0${variables.itemCount}`;

                const startOfPeriod = datesWidget.querySelector('.start');
                const endOfPeriod = datesWidget.querySelector('.end');

                dateIncrementAnimation(currentData.start, startOfPeriod);
                dateIncrementAnimation(currentData.end, endOfPeriod);

            }
        });
    }

    nextBtn.addEventListener('click', () => {

        const pointElements = datesWidget.querySelectorAll<HTMLElement>('.dates__point');
        const pointsArray = Array.from(pointElements);
        rotateCirclePoints(pointsArray, -1);

        const infoTitle: HTMLElement | null = datesWidget.querySelector('.dates__info-title');
        infoTitle.classList.remove('dates__info-title_active');
    })

    prevBtn.addEventListener('click', () => {

        const pointElements = datesWidget.querySelectorAll<HTMLElement>('.dates__point');
        const pointsArray = Array.from(pointElements);
        rotateCirclePoints(pointsArray, 1);

        const infoTitle: HTMLElement | null = datesWidget.querySelector('.dates__info-title');
        infoTitle.classList.remove('dates__info-title_active');

    })


}
